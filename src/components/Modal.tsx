"use client";

import { ReactNode } from "react";

const Modal = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-secondary"
        onClick={() => {
          const modal = document.getElementById(id);
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        {title}
      </button>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-action">
          <div className="modal-box">
            {children}
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
