import { Toaster, ToastIcon, resolveValue } from "react-hot-toast";

const TailwindToaster = () => {
  return (
    <Toaster>
      {(t) => (
        <div
          appear="true"
          show={`${t.visible}`}
          className="transform p-4 flex bg-white rounded shadow-lg text-zinc-800 font-medium"
          enter="transition-all duration-150"
          enterfrom="opacity-0 scale-50"
          enterto="opacity-100 scale-100"
          leave="transition-all duration-150"
          leavefrom="opacity-100 scale-100"
          leaveto="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p
            className="px-2 text-sm"
            dangerouslySetInnerHTML={{ __html: resolveValue(t.message) }}
          ></p>
        </div>
      )}
    </Toaster>
  );
};

export default TailwindToaster;
