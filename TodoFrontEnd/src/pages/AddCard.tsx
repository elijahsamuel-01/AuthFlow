import { useState } from "react";
import styled from "styled-components";
import { addCard } from "../api/authAPI";
import { useParams } from "react-router-dom";

export const AddCard = ({ setShoww }: any): any => {
  const [state, setState] = useState("");

  const { ID }: any = useParams();

  return (
    <div>
      <Hold>
        <Wrap>
          <ProjectName>
            <Input
              placeholder="Enter card name here"
              value={state}
              onChange={(e: any) => {
                setState(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                setShoww(false);
                addCard({ data: state }, ID);
              }}
            >
              Add Card
            </Button>
          </ProjectName>
        </Wrap>
        <Container
          onClick={() => {
            setShoww(false);
          }}
        ></Container>
      </Hold>
    </div>
  );
};

const Hold = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  border: 4px solid white;
  &::placeholder {
    // font-family: Poppins;
  }
`;

const Button = styled.div`
  padding: 10px 20px;
  color: white;
  background-color: plum;
  transition: all 350ms;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: purple;
  }
`;

const ProjectName = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const Wrap = styled.div`
  z-index: 3;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #810381;
  border-radius: 30px;
  position: absolute;
`;
const Container = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
`;
