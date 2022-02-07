type HeaderProps = {
  title: string;
  Icon: any;
  onClick?: any;
};

function HeaderItem({ title, Icon, onClick }: HeaderProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-[#06202A] dark:hover:text-white"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce " />
      <h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </h1>
    </div>
  );
}

export default HeaderItem;
