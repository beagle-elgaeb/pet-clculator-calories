import styled from "@emotion/styled/macro";
import { Container, HoverAnimation } from "../styles/patterns";
import { useFormik } from "formik";
import { profileValidationSchema } from "../utils/validation";
import { lightPurple, mediumPurple, purple } from "../styles/colors";
import { saveProfile } from "../redux/profileSlise";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import InputSelect from "./InputSelect";
import {
  optionsActivity,
  optionsPurpose,
  optionsSex,
} from "../utils/optionsLists";
import { State } from "../redux/types";

function Profile() {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.profile);

  type initialValuesType = {
    name: string;
    age: string;
    stature: string;
    weight: string;
    sex: string;
    activityLevel: string;
    purpose: string;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data.name,
      age: data.age,
      stature: data.stature,
      weight: data.weight,
      sex: data.sex,
      activityLevel: data.activityLevel,
      purpose: data.purpose,
    } as initialValuesType,
    validationSchema: profileValidationSchema,
    onSubmit: (values) => {
      dispatch(saveProfile({ ...values, baseMetabolism, purposeMetabolism }));
    },
  });

  const { name, age, stature, weight, sex, activityLevel, purpose } =
    formik.values;

  let baseMetabolism = 0;

  function calculateMetabolism() {
    if (sex === "Женщина") {
      baseMetabolism = Math.round(
        447.593 +
          Number(weight) * 9.247 +
          Number(stature) * 3.098 -
          Number(age) * 4.33
      );
    } else if (sex === "Мужчина") {
      baseMetabolism = Math.round(
        88.362 +
          Number(weight) * 13.397 +
          Number(stature) * 4.799 -
          Number(age) * 5.667
      );
    }

    return baseMetabolism;
  }

  calculateMetabolism();

  const activeMetabolism = Math.round(baseMetabolism * Number(activityLevel));

  const purposeMetabolism = Math.round(activeMetabolism * Number(purpose));

  return (
    <ProfileContainer>
      <ProfileForm onSubmit={formik.handleSubmit}>
        <Input formik={formik} value={name} name="name" placeholder="Имя" />
        <Title>
          Введите данные чтобы рассчитать дневную норму калорийности
        </Title>
        <Inputs>
          <Input formik={formik} value={age} name="age" placeholder="Возраст" />
          <Input
            formik={formik}
            value={stature}
            name="stature"
            placeholder="Рост в см"
          />
          <Input
            formik={formik}
            value={weight}
            name="weight"
            placeholder="Вес в кг"
          />
        </Inputs>
        <InputSelect
          formik={formik}
          value={sex ?? ""}
          options={optionsSex}
          name="sex"
          placeholder="Пол"
        />
        <InputSelect
          formik={formik}
          value={
            !activityLevel
              ? ""
              : optionsActivity.find(
                  (option) => option.value === activityLevel
                )!.span
          }
          options={optionsActivity}
          name="activityLevel"
          placeholder="Уровень активности"
        />
        <InputSelect
          formik={formik}
          value={
            !purpose
              ? ""
              : optionsPurpose.find((option) => option.value === purpose)!.span
          }
          options={optionsPurpose}
          name="purpose"
          placeholder="Цель"
        />
        <Title>Результаты рассчёта:</Title>
        <Results>
          <ResultTitle>Базовый метаболизм:</ResultTitle>
          <Result>{baseMetabolism}</Result>
          <ResultUnit>ккал</ResultUnit>
          <ResultTitle>С учётом активности:</ResultTitle>
          <Result>{activeMetabolism}</Result>
          <ResultUnit>ккал</ResultUnit>
          <ResultTitle>Для быстрого ↓ веса:</ResultTitle>
          <Result>{Math.round(activeMetabolism * 0.8)}</Result>
          <ResultUnit>ккал</ResultUnit>
          <ResultTitle>Для снижения веса:</ResultTitle>
          <Result>{Math.round(activeMetabolism * 0.9)}</Result>
          <ResultUnit>ккал</ResultUnit>
          <ResultTitle>Для набора веса:</ResultTitle>
          <Result>{Math.round(activeMetabolism * 1.1)}</Result>
          <ResultUnit>ккал</ResultUnit>
          <ResultTitle>Для быстрого ↑ веса:</ResultTitle>
          <Result>{Math.round(activeMetabolism * 1.2)}</Result>
          <ResultUnit>ккал</ResultUnit>
        </Results>
        6
        <SaveButton
          type="submit"
          aria-label="Добавить запись"
          disabled={!formik.isValid}
        >
          Сохранить
        </SaveButton>
      </ProfileForm>
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.main`
  ${Container};
  border-top: 1px solid ${mediumPurple};
`;

const ProfileForm = styled.form``;

const Title = styled.h2`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  text-align: start;
  margin: 15px 0;
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0 0;
`;

const Results = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
  row-gap: 5px;
  margin: 10px 0;
`;

const Result = styled.div`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  text-align: center;
`;

const ResultTitle = styled(Result)`
  font-weight: 400;
  text-align: right;
`;

const ResultUnit = styled(Result)`
  font-size: 12px;
  line-height: 14px;
  font-weight: 200;
  text-align: left;
`;

const SaveButton = styled.button<{ disabled: boolean }>`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${({ disabled }) => (disabled ? `${mediumPurple}` : `${purple}`)};
  margin: 60px 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  ${HoverAnimation}
`;
