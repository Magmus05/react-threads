import type { Comment } from "../types"
import { api } from "./api"

export const commentApi = api.injectEndpoints({
  endpoints: builder => ({
    createComments: builder.mutation<Comment, Partial<Comment>>({
      query: newComment => ({
        url: "/comments",
        method: "POST",
        body: newComment,
      }),
    }),
    deleteComment: builder.mutation<void, string>({
      query: id => ({
        url: `/comments/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useCreateCommentsMutation, useDeleteCommentMutation } =
  commentApi

export const {
  endpoints: { createComments, deleteComment },
} = commentApi
