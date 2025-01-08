import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="relative w-full max-w-sm">
      <Input
        type="search"
        placeholder="Search anything..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10"
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      {isLoading && <div className="mt-2">Searching...</div>}
      {searchResults && searchResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-background border rounded-md shadow-lg p-2 z-50">
          {searchResults.map((result: any, index: number) => (
            <div key={index} className="p-2 hover:bg-accent rounded-sm">
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;