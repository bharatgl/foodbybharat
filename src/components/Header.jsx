import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { MdShoppingBag, MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };

  const logout = () => {
    setisMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="z-50 w-screen p-4 Wpx-6 md:p-6 md:px-16 bg-primary">
      {/* desktop and tablet  */}

      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">FoodbyBharat</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 ml-auto"
          >
            <li
              className="text-base text-textColor hover: bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer "
              onClick={() => setisMenu(false)}
            >
              Home
            </li>
            <li
              className="text-base text-textColor hover: bg-slate-100 duration-100 transition-all ease-in -out cursor-pointer"
              onClick={() => setisMenu(false)}
            >
              Menu
            </li>
            <li
              className="text-base text-textColor hover: bg-slate-100 duration-100 transition-all ease-in -out cursor-pointer"
              onClick={() => setisMenu(false)}
            >
              About Us
            </li>
            <li
              className="text-base text-textColor hover: bg-slate-100 duration-100 transition-all ease-in -out cursor-pointer"
              onClick={() => setisMenu(false)}
            >
              Service
            </li>
          </motion.ul>

          <div className=" z-1 relative flex items-center justify-center">
            <MdShoppingBag className="text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative ">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className=" w-10 min-w-[40-px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="  w-40 bg-gray-50 shadow-xl rounded-lg  flex  flex-col absolute top-12 right-0 "
              >
                {user && user.email === "bgoyal1471@gmail.com" && (
                  <Link to={"/createitem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all duration-100 ease-in-out text textColor text-base"
                      onClick={() => setisMenu(false)}
                    >
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 cursor-pointer  bg-gray-200  hover:bg-gray-300 transition-all duration-100 ease-in-out text textColor text-base"
                  onClick={logout}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className="flex items-center justify-between md:hidden h-full">
        <div className="relative flex items-center justify-center">
          <MdShoppingBag className="text-textColor text-2xl ml-auto cursor-pointer" />
          <div className=" absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">FoodbyBharat</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className=" w-10 min-w-[40-px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg  flex  flex-col absolute top-12 right-0 "
            >
              {user && user.email === "bgoyal1471@gmail.com" && (
                <Link to={"/createitem"}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text textColor text-base"
                    onClick={() => setisMenu(false)}
                  >
                    New Item
                    <MdAdd />
                  </p>
                </Link>
              )}

              <ul className=" z-50 flex flex-col">
                <li
                  className="text-base text-textColor duration-100 transition-all ease-in -out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setisMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor  duration-100 transition-all ease-in -out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setisMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor  duration-100 transition-all ease-in -out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setisMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor  duration-100 transition-all ease-in -out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setisMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out text textColor text-base"
                onClick={logout}
              >
                Logout
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
