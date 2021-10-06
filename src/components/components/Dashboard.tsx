import React, { useMemo } from "react";
import styled from "styled-components";
import { ConstructorStorage } from "src/components/useConstructor";
import { lib } from "src/components/lib/config";
import { Id } from "src/components/types";
import DragDropContainer from "src/components/components/DragDrop/DragDropContainer";
import DraggableItem from "src/components/components/DragDrop/DraggableItem";

const DashboardWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
const DashboardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 54px 0 70px;
  top: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 100%, 0);
  }
  ::-webkit-scrollbar-track {
    background: hsla(0, 0%, 100%, 0);
  }
`;
const ScrollZone = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const WorkComponentList = styled.div<{ isSortMode: boolean }>`
  .work-component-wrapper {
    box-sizing: border-box;
    ${({ isSortMode }) =>
      isSortMode
        ? "width: calc(100% - 16px); min-height: 40px; border-radius: 6px; background-color: rgb(230, 230, 230); margin: 8px; padding: 8px; cursor: grab;"
        : "width: calc(100% - 20px); margin: 10px;"}
  }
`;

interface DashboardProps {
  store: ConstructorStorage;
  isSortMode: boolean;
  onEditComponent: (uid: string, id: Id) => void;
}

const Dashboard: React.FC<DashboardProps> = React.memo(
  ({ store, onEditComponent, isSortMode }) => {
    const Container = useMemo(
      () => (isSortMode ? DragDropContainer : React.Fragment),
      [isSortMode]
    );
    const ItemWrapper = useMemo(
      () => (isSortMode ? DraggableItem : React.Fragment),
      [isSortMode]
    );

    return (
      <DashboardWrapper>
        <DashboardContainer>
          <ScrollZone>
            <WorkComponentList isSortMode={isSortMode}>
              <Container>
                {store.components.map((component, index) => {
                  const Component = lib[component.id].component;

                  return (
                    <ItemWrapper key={component.uid} uid={component.uid} index={index}>
                      <div
                        key={component.uid}
                        className="work-component-wrapper"
                        onClick={
                          !isSortMode
                            ? onEditComponent.bind(
                                null,
                                component.uid,
                                component.props.id
                              )
                            : undefined
                        }
                      >
                        <Component {...component.props} />
                      </div>
                    </ItemWrapper>
                  );
                })}
              </Container>
            </WorkComponentList>
          </ScrollZone>
        </DashboardContainer>
      </DashboardWrapper>
    );
  }
);

export default Dashboard;
