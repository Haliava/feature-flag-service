import { ArrowLeftCircle } from "lucide-react";
import { Outlet, useNavigate } from "react-router";

import Footer from "@/widgets/footer";
import { Button } from "@/shared/ui/button";
import { Toaster } from "@/shared/ui/toaster";
import { useModalStore } from "@/shared/store/modalStore";
import { modalComponents } from "@/widgets/modals/consts";

export type LayoutProps = {
  className?: string
}

export const Layout = ({className}: LayoutProps) => {
  const {openModals} = useModalStore();
  const navigate = useNavigate();

  const handleBackArrowClick = () => {
    navigate('/');
  }

  return (
    <div className={className}>
      <Outlet />
      {Array.from(openModals.entries()).map(([modal, {props}]) => {
        console.log(modal);
        const ModalElement = modalComponents[modal];

        return (
          <ModalElement key={modal} {...props} />
        )
      })}
      <Footer />
      <Button className="fixed bg-transparent hover:bg-transparent top-10 left-10 w-24 h-24" onClick={handleBackArrowClick}>
        <ArrowLeftCircle className="w-24 h-24" />
      </Button>
      <Toaster />
    </div>
  );
}
