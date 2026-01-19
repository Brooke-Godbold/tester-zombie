import { useEffect, useRef, useState } from "react";
import { Arrow, DropdownWrapper, Item, Menu, Trigger } from "./Dropdown.styles";

export type DropdownOption<T = string> = {
    label: string;
    value: T;
}

type Props<T> = {
    options: DropdownOption<T>[];
    value?: T;
    onChange: (value: T) => void;
    placeholder?: string;
}

export function Dropdown<T>({
    options,
    value,
    onChange,
    placeholder = "Select..."
}: Props<T>) {
    const [open, setOpen] = useState<Boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const selected = options.find(o => o.value === value);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <DropdownWrapper ref={ref}>
            <Trigger onClick={() => setOpen(open => !open)}>
                { selected?.label ?? placeholder }
                <Arrow>▾</Arrow>
            </Trigger>

            { open && (
                <Menu>
                    { options.map(option => (
                        <Item
                            key={String(option.value)}
                            onClick={() => {
                                onChange(option.value);
                                setOpen(false);
                            }}
                        >
                            {option.label}
                        </Item>
                    ))}
                </Menu>
            )}
        </DropdownWrapper>
    )
}