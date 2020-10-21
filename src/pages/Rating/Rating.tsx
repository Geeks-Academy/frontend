import React from 'react';
import { ButtonIcon, RatingHeader } from 'assets';
import SelectInput from 'components/molecules/SelectInput';
import { Link } from 'react-router-dom';
import {
  CourseSearching,
  Filters,
  Navigation,
  NavigationList,
  SearchCourseInput,
  StyledContainer,
  StyledFillButton,
  StyledHeader,
  StyledInfo,
  StyledLogo,
  StyledOutlineButton,
  StyledSpan,
  StyledTopBar,
  SubTitle,
  Title,
} from './Rating.styled';
import { courseOptions, levelOptions, priceOptions, technologyOptions } from './options';

const Rating = (): JSX.Element => {
  const handleSelectChange = () => {
    console.log(1);
  };

  return (
    <StyledHeader background={RatingHeader}>
      <StyledContainer>
        <StyledTopBar>
          <StyledLogo />
          <Navigation>
            <NavigationList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">My courses</Link>
              </li>
            </NavigationList>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#fff',
              }}
            />
          </Navigation>
        </StyledTopBar>
        <StyledInfo>
          <Title>Find your dream course!</Title>
          <SubTitle>Find something for yourself from over thousands of product</SubTitle>
          <CourseSearching>
            <SearchCourseInput placeholder="Course title or #keyword" />
            <StyledFillButton type="fill" icon={ButtonIcon} iconPos="left">
              Search
            </StyledFillButton>
            <StyledSpan>or</StyledSpan>
            <StyledOutlineButton>Add new course</StyledOutlineButton>
          </CourseSearching>
        </StyledInfo>
        <Filters>
          <SelectInput
            isMulti
            isOpen={false}
            inputPlaceholder="Filter course"
            options={courseOptions}
            onChange={handleSelectChange}
            selectCaption="Course sector"
          />
          <SelectInput
            isMulti
            isOpen={false}
            inputPlaceholder="Filter technology"
            options={technologyOptions}
            onChange={handleSelectChange}
            selectCaption="Technology"
          />
          <SelectInput
            isMulti
            isOpen={false}
            inputPlaceholder="Filter price"
            onChange={handleSelectChange}
            options={priceOptions}
            selectCaption="Price"
          />
          <SelectInput
            isMulti
            isOpen={false}
            inputPlaceholder="Filter level"
            options={levelOptions}
            onChange={handleSelectChange}
            selectCaption="Level"
          />
          <StyledOutlineButton>Advanced</StyledOutlineButton>
          <StyledOutlineButton>Reset filters</StyledOutlineButton>
        </Filters>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Rating;
