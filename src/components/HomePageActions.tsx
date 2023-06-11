"use client";
import { Post } from "@prisma/client";
import { CheckIcon, CopyIcon, LucideRefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const HomePageActions = ({ post }: { post: Post }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col md:flex-row basis-1/4 gap-4">
      <Button className="gap-3">
        <LucideRefreshCw className="w-4 h-4" />
        Regenrate
      </Button>
      <Button
        className="gap-3"
        disabled={copied}
        onClick={() => {
          navigator.clipboard.writeText(post.nepali);
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        }}
      >
        {copied ? (
          <CheckIcon className="w-4 h-4" />
        ) : (
          <CopyIcon className="w-4 h-4" />
        )}
        Copy
      </Button>
    </div>
  );
};

export default HomePageActions;
