import { Button } from "~/components/ui/button";

interface GoogleButtonProps {
  text: string;
  onClick?: () => void;
}

export function GoogleButton({ text, onClick }: GoogleButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-full cursor-pointer h-10 flex font-medium items-center justify-center gap-2 text-[#171717]"
      onClick={onClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8055 10.2275C19.8055 9.51764 19.7485 8.83471 19.6273 8.17188H10.2055V11.8719H15.6273C15.4055 13.0938 14.7055 14.1219 13.6555 14.7701V17.2313H16.8555C18.7485 15.5125 19.8055 13.0938 19.8055 10.2275Z"
          fill="#4285F4"
        />
        <path
          d="M10.2055 20.0001C12.9055 20.0001 15.1698 19.1126 16.8555 17.2313L13.6555 14.7701C12.7698 15.3601 11.5983 15.7032 10.2055 15.7032C7.5983 15.7032 5.3983 14.0032 4.6055 11.7126H1.3125V14.2457C3.0125 17.6438 6.4055 20.0001 10.2055 20.0001Z"
          fill="#34A853"
        />
        <path
          d="M4.60547 11.7125C4.18359 10.5344 4.18359 9.24063 4.60547 8.0625V5.52938H1.31641C-0.144531 8.33125 -0.144531 11.4438 1.31641 14.2456L4.60547 11.7125Z"
          fill="#FBBC05"
        />
        <path
          d="M10.2055 4.29688C11.6273 4.27813 13.0055 4.80625 14.0555 5.79063L16.8984 2.94688C15.0841 1.24375 12.6841 0.2875 10.2055 0.309375C6.4055 0.309375 3.0125 2.66563 1.3125 6.06375L4.60156 8.59688C5.3983 6.30625 7.5983 4.60625 10.2055 4.29688Z"
          fill="#EA4335"
        />
      </svg>
      {text}
    </Button>
  );
}
