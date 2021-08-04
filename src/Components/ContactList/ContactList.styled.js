import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 25px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: var(--title-color);
  text-shadow: var(--secondary-color) 1px 0 10px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  /* height: 20px; */
  margin-left: 25px;
  cursor: pointer;
  padding: 5px 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px var(--secondary-color);
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  color: var(--secondary-color);

  &:hover {
    background-color: var(--red-color);
    transform: scale(1.05);
    border: none;
    outline: none;
  }
`;
