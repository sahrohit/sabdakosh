"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Post } from "@prisma/client";
import { Calendar, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
const Search = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const runThisNow = async () => {
      if (open && query) {
        const data = await fetch(`/api/search?query=${query}`, {
          method: "GET",
        });
        const posts = await data.json();
        setPosts(posts);
      }
    };
    runThisNow();
  }, [open, query]);

  return (
    <div>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        <SearchIcon className="w-6 h-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={query}
          onValueChange={(e) => setQuery(e)}
          placeholder="Type a command or search..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Ukhaan & Tukka">
            {posts.map((post: Post) => (
              <CommandItem key={post.id}>
                <Calendar className="mr-2 h-4 w-4" />
                <div>
                  <p>{post.nepali}</p>
                  <p>{post.roman}</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Search;
