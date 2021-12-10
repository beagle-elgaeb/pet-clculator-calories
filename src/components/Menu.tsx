import styled from "@emotion/styled/macro";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../redux/types";
import { lightPurple, mediumPurple, purple, yellow } from "../styles/colors";
import { HoverAnimation } from "../styles/patterns";
import { optionsActivity, optionsPurpose } from "../utils/optionsLists";

function Menu({ onClose }: { onClose: () => void }) {
  const data = useSelector((state: State) => state.profile);

  return (
    <MenuContainer>
      <ProfileData>
        <Name>{data.name}</Name>
        <Parameter>{data.sex}</Parameter>
        <Parameter>
          {data.age} года, {data.stature} см, {data.weight} кг
        </Parameter>
        <Parameter>
          {!data.activityLevel
            ? ""
            : optionsActivity.find(
                (option) => option.value === data.activityLevel
              )!.span}{" "}
          уровень активности
        </Parameter>
        <Purpose>
          <Parameter>
            Цель:{" "}
            {!data.purpose
              ? ""
              : optionsPurpose.find((option) => option.value === data.purpose)!
                  .text}
          </Parameter>
          <Calories>{data.purposeMetabolism} ккал</Calories>
        </Purpose>
      </ProfileData>
      <EditProfileButton to="/profile" onClick={onClose}>
        Редактировать личные данные
      </EditProfileButton>
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  height: calc(100vh - 97px);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 77px 0 0 0;
  padding: 10px;
`;

const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.h2`
  font-size: 23px;
  line-height: 25px;
  font-weight: 600;
  color: ${yellow};
  text-shadow: 0 1px 1px ${purple};
  margin: 0;
`;

const Parameter = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: ${purple};
  margin: 10px 0 0 0;
`;

const Purpose = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0 0;
`;

const Calories = styled(Parameter)`
  font-size: 24px;
  line-height: 26px;
  font-weight: 600;
  color: ${yellow};
  text-shadow: 0 1px 1px ${purple};
  align-self: center;
  margin: 20px 0 0;
`;

const EditProfileButton = styled(Link)`
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  text-decoration: none;
  margin: 60px 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 18px;
  }

  ${HoverAnimation}
`;
