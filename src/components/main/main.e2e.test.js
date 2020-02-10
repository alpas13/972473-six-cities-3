import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const titlesOffers = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

it(`Should link of title be clicked`, () => {
  const onTitleOfferClick = jest.fn();
  const main = shallow(
      <Main
        offersCount={300}
        titlesOffers={titlesOffers}
        onTitleOfferClick={onTitleOfferClick}
      />
  );

  const titleLink = main.find(`.place-card__name > a`);
  titleLink.forEach((title) => {
    title.simulate(`click`);
  });
  expect(onTitleOfferClick.mock.calls.length).toBe(5);
});
