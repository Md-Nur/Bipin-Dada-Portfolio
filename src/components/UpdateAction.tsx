"use client";
import Modal from "@/components/Modal";
import TinyEditor from "@/components/TinyMCE";
import { databases } from "@/lib/appwrite";
import { toast } from "react-toastify";


const UpdateAction = ({ initVal, docId, colId }: { initVal: string | null, docId: string, colId: string }) => {
  const actionFunc = (val: string) => {
    
    databases
      .updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        colId,
        docId,
        {
          content: val,
        }
      )
      .then((res) => {
        toast.success("Hero content updated successfully!");
        console.log("Update response:", res);
        const modal = document.getElementById(docId);
          if (modal) {
            (modal as HTMLDialogElement).close(); // Close the modal after update
          }
        window.location.reload();
      })
      .catch((error) => {
        toast.error(
          `Error updating hero content: ${error.message || "Unknown error"}`
        );
        console.error("Update error:", error);
      });
  };
  return (
    <Modal id={docId} title="Update">
      <form onSubmit={(e) => e.preventDefault()}>
        <TinyEditor actionFunc={actionFunc} initVal={initVal || ""} />
      </form>
    </Modal>
  );
};

export default UpdateAction;
