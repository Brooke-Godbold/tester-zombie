import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Trigger = styled.button`
  width: 100%;
  padding: 10px 12px;
  background: var(--color-brand-800);
  color: var(--color-brand-300);
  border: 1px solid var(--color-brand-400);
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "HauntedHillRegular", sans-serif;
  font-size: 1.8rem;
`;

export const Arrow = styled.span`
  font-size: 1.8rem;
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  width: 100%;
  background: var(--color-brand-800);
  color: var(--color-brand-300);
  border: 1px solid var(--color-brand-400);
  border-radius: 6px;
  list-style: none;
  margin: 0;
  padding: 4px 0;
  z-index: 1000;
`;

export const Item = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;