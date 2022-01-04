import {
  AboutProjectContainer,
  Subtitlele,
  Text,
  Title,
  List,
  ListItem,
  Span,
  ListItemUnavailable,
} from "./AboutProject.styles";

function AboutProject() {
  return (
    <AboutProjectContainer>
      <Title>О приложении</Title>

      <Text>
        Данное приложение представляет собой попытку реализовать калькулятор
        пищевой ценности потреблённых продуктов, имеющий минималистичный
        интерфейс при высокой функциональности.
      </Text>

      <Subtitlele>Функциональность:</Subtitlele>

      <List>
        <ListItem>
          При внесении данных в профиль пользователя, калькулятор рассчитывает
          целевые <Span>КБЖУ*</Span> (использована формула Харриса-Бенедикта) и{" "}
          <Span>ИМТ*</Span> (вес/рост&#178;).
        </ListItem>
        <ListItem>
          После внесении данных в калькулятор калорий, рассчитывается
          калорийность продукта исходя из данных о белках, жирах и углеводах.
          Данные сохраняются в базу данных. Иногда случается, что на продукте
          КБЖУ указаны не в рассчёте на 100гр, а на общий вес продукта или на
          вес единицы продукта. На этот случай в калькуляторе предусмотрено поле
          для указания такого веса.
        </ListItem>
        <ListItem>
          Сохранённые данные о приёмах пищи группируются по дням. Подробная
          информация изначально скрыта. Отображаются только наглядные графики,
          демонстрирующие соотношение потреблённых КБЖУ к целевым, позволяющие
          быстро оценить насколько близка цель. Скрытые данные о приёмах пищи
          есть возможность развернуть, удалить ненужные данные, отредактировать
          ошибочные.
        </ListItem>
        <ListItemUnavailable>
          Калькулятор имеет базу данных <Span>простых продуктов*</Span>, так же
          пользовательскую базу данных, раширяемую продуктами, вносимыми всеми
          пользователями.
        </ListItemUnavailable>
      </List>

      <Subtitlele>Термины и определения:</Subtitlele>

      <Text>*КБЖУ - килокалории, белки, жиры и углеводы.</Text>
      <Text>*ИМТ - индекс массы тела.</Text>
      <Text>
        *Простые продукты - продукты, из которых обычно готовят что-то более
        сложное <Span>(пример: яблоко)</Span>.
      </Text>

      <Subtitlele>Об авторе:</Subtitlele>

      <Text>Никонова Евгения</Text>
    </AboutProjectContainer>
  );
}

export default AboutProject;