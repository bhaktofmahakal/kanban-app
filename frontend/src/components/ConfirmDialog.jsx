import { useEffect, useRef } from "react";

export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  const cancelRef = useRef(null);

  useEffect(() => {
    cancelRef.current?.focus();

    function handleKey(e) {
      if (e.key === "Escape") onCancel();
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onCancel]);

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="modal"
        role="alertdialog"
        aria-modal="true"
        aria-label="Confirm deletion"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="modal-message">{message}</p>
        <div className="modal-actions">
          <button
            className="button-ghost"
            type="button"
            ref={cancelRef}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button className="button-danger" type="button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
