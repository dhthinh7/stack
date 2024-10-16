"use client"

import React, { useCallback, useRef, useState } from "react";
import { QuestionsSchema } from "@/lib/validations";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { Button } from "../ui/button";
import { Editor } from '@tinymce/tinymce-react';
import { useTheme } from "@/context/ThemeProvider";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.action";

const Question = () => {
  const editorRef = useRef(null);
  const { mode } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [type, setType] = useState<'Edit' | 'Create'>('Create')

  // 1. Define your form.
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: []
    },
  })

  const onSubmit = useCallback(async (value: z.infer<typeof QuestionsSchema>) => {
    console.log(value);
    setIsSubmitting(true)
    try {
      await createQuestion(value)
    } catch (error) {
      //
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: ControllerRenderProps<{
    title: string;
    explanation: string;
    tags: string[];
  }, "tags">) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag must be less than 15 characters.'
          })
        }

        if (!field.value.includes(tagValue)) {
          form.setValue('tags', [...field.value, tagValue]);
          tagInput.value = ''
          form.clearErrors('tags');
        }
      } else {
        form.trigger();
      }
    }
  }

  const handleTagRemove = (tag: string, field: ControllerRenderProps<{
    title: string;
    explanation: string;
    tags: string[];
  }, "tags">) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue('tags', newTags);
  }

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-semibold text-dark400_light800">Question Title <span className="text-primary-500">*</span></FormLabel>
            <FormControl className="mt-3.5">
              <Input
                className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                {...field} />
            </FormControl>
            <FormDescription className="body-regular mt-2.5 text-light-500">
              Be specific and imagine you&apos;re asking a question to another person.
            </FormDescription>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="explanation"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col gap-3">
            <FormLabel className="paragraph-semibold text-dark400_light800">Detailed explanation of your problem <span className="text-primary-500">*</span></FormLabel>
            <FormControl className="mt-3.5">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                onInit={(evt, editor) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  editorRef.current = editor
                }}
                onBlur={field.onBlur}
                onEditorChange={(content) => field.onChange(content)}
                // initialValue={parsedQuestionDetails?.content || ''}
                init={{
                  height: 350,
                  menubar: true,
                  plugins: 'table advlist lists image media anchor link autoresize fullscreen',
                  toolbar: 'undo redo | font | blocks bold forecolor backcolor | bullist numlist | link image media anchor | table | code | fullscreen',
                  content_style: 'body { font-family:Inter; font-size:16px }',
                  skin: mode === 'dark' ? 'oxide-dark' : 'oxide',
                  content_css: mode === 'dark' ? 'dark' : 'light',
                }}
              />
            </FormControl>
            <FormDescription className="body-regular mt-2.5 text-light-500">
              Introduce the problem and expand on what you put in the title. Minimum 20 characters.
            </FormDescription>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tags"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-semibold text-dark400_light800">Tags <span className="text-primary-500">*</span></FormLabel>
            <FormControl className="mt-3.5">
              <>
                <Input
                  disabled={type === 'Edit'}
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  placeholder="Add tags..."
                  onKeyDown={(e) => handleInputKeyDown(e, field)}
                />

                {field.value && field.value.length > 0 && (
                  <div className="flex-start mt-2.5 gap-2.5">
                    {field.value.map((tag) => (
                      <Badge key={tag} className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                        onClick={() => type !== 'Edit' ? handleTagRemove(tag, field) : () => { }}
                      >
                        {tag}
                        {type !== 'Edit' && (<Image
                          src="/assets/icons/close.svg"
                          alt="Close icon"
                          width={12}
                          height={12}
                          className="cursor-pointer object-contain invert-0 dark:invert"
                        />)}
                      </Badge>
                    ))}
                  </div>
                )}
              </>
            </FormControl>
            <FormDescription className="body-regular mt-2.5 text-light-500">
              Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
            </FormDescription>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <Button type="submit" className="primary-gradient w-fit !text-light-900">
        {isSubmitting ? (
          <>
            {type === 'Edit' ? 'Editing...' : 'Posting...'}
          </>
        ) : (
          <>
            {type === 'Edit' ? 'Edit Question' : 'Ask a Question'}
          </>
        )}

      </Button>
    </form>
  </Form>
};

export default Question;
