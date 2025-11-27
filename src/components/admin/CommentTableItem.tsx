import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import type { CommentType } from "@/types";
import toast from "react-hot-toast";

interface CommentTableItemProps {
  comment: CommentType;
  fetchComments: () => void;
  index: number;
}

const CommentTableItem = ({
  comment,
  fetchComments,
}: CommentTableItemProps) => {
  const { blog, _id, createdAt } = comment;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComments = async () => {
    try {
      const { data } = await axios.post(`/api/admin/approve-comment`, {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const deleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this blog?"
      );
      if (!confirm) return;
      const { data } = await axios.post(`/api/admin/delete-comment`, {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <tr className="border-y border-b-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComments}
              src={assets.tick_icon}
              className="w-5 hover:scale-110 transition-all cursor-poionter"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            alt=""
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
