import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: async () => {
      if (!searchQuery) return [];
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error("Search failed");
      return response.json();
    },
    enabled: searchQuery.length > 0,
  });

  // Handle input change and update suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Update suggestions based on searchResults
    if (searchResults && searchResults.length > 0) {
      const matchedSuggestions = searchResults
        .map((result: any) => result.title)
        .filter((title: string) => 
          title.toLowerCase().includes(value.toLowerCase())
        );
      setSuggestions(matchedSuggestions);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh] px-4">
      <div className="relative w-full max-w-2xl">
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
        
        {suggestions.length > 0 && searchQuery && (
          <div className="absolute top-full mt-2 w-full bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg p-2 z-50 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors"
                onClick={() => setSearchQuery(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;