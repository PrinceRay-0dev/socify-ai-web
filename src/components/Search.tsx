import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { langflowClient } from "@/utils/langflowClient";
import { useToast } from "@/components/ui/use-toast";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: async () => {
      if (!searchQuery) return null;
      try {
        const result = await langflowClient.search(searchQuery);
        return result;
      } catch (error) {
        toast({
          title: "Search Error",
          description: "Failed to fetch search results. Please try again.",
          variant: "destructive",
        });
        return null;
      }
    },
    enabled: searchQuery.length > 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Input
        type="search"
        placeholder="Search anything..."
        value={searchQuery}
        onChange={handleInputChange}
        className="pl-10 h-12 text-lg rounded-full shadow-lg focus:ring-2 focus:ring-primary"
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      
      {isLoading && (
        <div className="absolute top-full mt-2 w-full text-center py-2 bg-background/80 backdrop-blur-sm rounded-md">
          Searching...
        </div>
      )}
      
      {searchResults && (
        <div className="absolute top-full mt-2 w-full bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg p-2 z-50 max-h-60 overflow-y-auto">
          <div className="p-3 rounded-md">
            {searchResults}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;