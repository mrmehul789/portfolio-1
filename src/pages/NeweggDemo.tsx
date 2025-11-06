import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Loader2, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const NeweggDemo = () => {
  const [itemNumber, setItemNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchProductData = async () => {
    if (!itemNumber.trim()) {
      setError("Please enter an item number.");
      return;
    }
    
    if (!/^N\w+$/i.test(itemNumber.trim())) {
      setError("Invalid item number. Should start with 'N' followed by alphanumeric characters.");
      return;
    }

    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch(
        `https://javascript-declaration-anne-birds.trycloudflare.com/product/${itemNumber.trim()}`
      );
      
      if (!response.ok) {
        throw new Error("Product not found or API unavailable");
      }

      const result = await response.json();
      setData(result);
      toast({
        title: "Success!",
        description: "Product data fetched successfully",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
      toast({
        title: "Error",
        description: "Failed to fetch product data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "JSON data copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/#projects">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Live API Demo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Newegg <span className="text-primary">Scraper</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Try the Newegg Scraper by entering a Newegg item number to see live
              product insights such as price, ratings, and availability.
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="glass-card p-8 mb-8 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">Try It Yourself!</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="N82E16819113877"
                value={itemNumber}
                onChange={(e) => setItemNumber(e.target.value)}
                className="w-full"
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground mt-2">
                💡 Hint: Enter the Newegg item number (starts with 'N') — e.g., <code className="px-1 py-0.5 rounded bg-primary/10 text-primary">N82E16819113877</code>
              </p>
            </div>

            <Button
              onClick={fetchProductData}
              disabled={loading || !itemNumber}
              className="w-full md:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Fetching Data...
                </>
              ) : (
                "Fetch Product Info"
              )}
            </Button>
          </div>

          {error && (
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
        </div>

        {/* Results Section */}
        {data && (
          <div className="glass-card p-8 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary">API Response</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy JSON
                  </>
                )}
              </Button>
            </div>

            <div className="relative">
              <pre className="bg-card/50 border border-primary/20 rounded-lg p-6 overflow-x-auto text-sm font-mono">
                <code className="text-foreground">
                  {JSON.stringify(data, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeweggDemo;
