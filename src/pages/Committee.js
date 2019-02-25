import React from 'react';
import Banner from '../components/Banner';
import team from '../images/team.jpg';
import committee from '../constants/committee';
import PersonCard from '../components/PersonCard';
import GridContainer from '../components/GridContainer';
import GridItem from '../components/GridItem';

const Committee = () => {
  return (
    <>
      <Banner bannerImg={team} />
      <div className="container mt-5">
        <GridContainer spacing={8}>
          {(committee).map((person, index) => {
            return (
              <GridItem xs={12} sm={4} md={3} key={index}>
                <PersonCard name={person.name} desc={person.desc} url={person.url} />
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    </>
  )
}

export default Committee;
