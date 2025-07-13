import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import Nothing from "../assets/Nothing.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginPanel from "../components/LoginPanel";
import { useNotification }  from "../components/Notification";
import { Globals } from "@/app/GlobalsProvider";
import { NotificationProvider } from "../components/Notification";

interface GlobalsContextType {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  showPanel: boolean;
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContactMessage {
  _id: string;
  name: string;
  email: string;  
  message: string;
  createdAt: string;
}

const Messages: React.FC = () => {
  const { loggedIn } = useContext<GlobalsContextType>(Globals);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const { showNotification } = useNotification();

  useEffect(() => {
    console.log('Messages useEffect - loggedIn:', loggedIn);
    if (loggedIn) {
      console.log('Fetching messages...');
      axios.get("/api/admin/messages", { withCredentials: true })
        .then(res => {
          console.log('Messages fetched:', res.data);
          setMessages(res.data);
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
          showNotification("error", "Unauthorized: Please login");
        });
    }
  }, [loggedIn, showNotification]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/admin/messages?id=${id}`, { withCredentials: true });
      setMessages(messages.filter(msg => msg._id !== id));
      showNotification("success", "Message deleted successfully", 3000);
    } catch {
      showNotification("error", "Failed to delete message");
    }
  };

  return (
    <>
      <Navbar />
      <LoginPanel />
      <div className="min-h-screen w-full flex flex-col items-center justify-start bg-white py-20">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Messages</h2>
        <div className="w-40 h-[1px] bg-indigo-600 mx-auto mb-6"></div>
        {messages.length > 0 ? (
          <>
            <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {messages.map((msg) => (
                <div key={msg._id} className="bg-white p-4 rounded-md shadow-md border border-gray-300">
                  <h3 className="text-lg font-semibold text-gray-700">{msg.name}</h3>
                  <p className="text-sm text-gray-500">{msg.email}</p>
                  <p className="mt-5 text-gray-600">{msg.message}</p>
                  <p className="mt-5 text-gray-400 text-sm">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="">
            <Image priority width={500} src={Nothing} alt="Profile photo" className="pointer-events-none select-none" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default function MessagesWithProvider() {
  return (
    <NotificationProvider>
      <Messages />
    </NotificationProvider>
  );
}
