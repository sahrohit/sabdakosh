"use client";
import { Post } from "@prisma/client";
import { CheckIcon, CopyIcon, LucideRefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import Spinner from "./shared/Spinner";

const formSchema = z.object({
  nepali: z.string(),
  roman: z.string(),
  meaning: z.string(),
});

const HomePageActions = ({ post }: { post: Post }) => {
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nepali: post.nepali,
      roman: post.roman,
      meaning: post.meaning,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/suggest/update", {
      method: "POST",
      body: JSON.stringify({ ...values, postId: post.id }),
    });
    if (res.ok) {
      setEditing(false);
      toast({
        title: "Suggestion submitted",
        description: "Your suggestion has been submitted for review.",
      });
    }
  };

  useEffect(() => {
    form.reset({
      nepali: post.nepali,
      roman: post.roman,
      meaning: post.meaning,
    });
  }, [form, post]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row basis-1/4 gap-4">
        <Button className="gap-3" onClick={() => router.refresh()}>
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

      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogTrigger asChild>
          <Button onClick={() => setEditing(true)}>Suggest an edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogHeader>
                <DialogTitle>Suggesting an edit to #{post.id}</DialogTitle>
                <DialogDescription>{post.nepali}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="nepali"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">Nepali</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="shadcn"
                            {...field}
                            className="col-span-3"
                          />
                        </FormControl>
                      </div>
                      <FormDescription className="text-right">
                        {post.nepali}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="roman"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">Roman</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="romanized nepali ma ukhaan tukka"
                            {...field}
                            className="col-span-3"
                          />
                        </FormControl>
                      </div>
                      <FormDescription className="text-right">
                        {post.roman}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="meaning"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">Meaning</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Meaning of the Ukhaan Tukka"
                            {...field}
                            className="col-span-3"
                          />
                        </FormControl>
                      </div>
                      <FormDescription className="text-right">
                        {post.meaning}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button
                  disabled={
                    !form.formState.isDirty || form.formState.isSubmitting
                  }
                  type="submit"
                  aria-disabled={!form.formState.isDirty}
                >
                  {form.formState.isSubmitting && <Spinner />}
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePageActions;
