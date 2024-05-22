import { MessageIcon } from "../../assets/Icons/MessageIcon";

export const InvitationButton = (props) => {
  const { handleClick } = props;

  return (
    <button
      className="flex items-center justify-center w-4/5 py-2 text-lg md:text-2xl bg-amber-700 text-slate-200 lg:w-1/4 md:py-6 lg:py-4 hover:bg-amber-900 rounded-xl"
      onClick={handleClick}
    >
      <MessageIcon /> <span className="ml-2">Open Invitation</span>
    </button>
  );
};
