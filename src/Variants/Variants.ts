export const MenubarVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0%",
  },
  exit: {
    x: "100%",
  },
};

export const UlVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const LiVariants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const EntryLeftVariants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};
export const EntryRightVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};
export const EntryTopVariants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};
export const EntryBottomVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};
