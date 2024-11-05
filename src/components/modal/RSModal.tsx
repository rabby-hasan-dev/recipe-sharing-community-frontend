import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";

interface IProps {
    buttonText: string | ReactNode;
    title: string;
    children: ReactNode;
    buttonVariant?:
    | "light"
    | "solid"
    | "bordered"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
    buttonClassName?: string;
    buttonIsIconOnly?: boolean;
    buttonSize?: "sm" | "lg" | "md"
}

export default function RSModal({
    buttonText,
    title,
    children,
    buttonVariant = "light",
    buttonClassName,
    buttonIsIconOnly,
    buttonSize

}: IProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                size={buttonSize}
                isIconOnly={buttonIsIconOnly}
                className={buttonClassName}
                variant={buttonVariant}
                onPress={onOpen}
            >
                {buttonText}
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="lg"
                scrollBehavior="outside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>{children}</ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}