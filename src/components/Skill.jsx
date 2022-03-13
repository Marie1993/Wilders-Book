import React from 'react';
import { Badge, SkillElement } from '../style/style';
// import Proptypes from 'prop-types';

const Skill = (props) => {
  const { skill } = props;
  return (
    <SkillElement>
      {skill.title}
      <Badge votes={Number(skill.votes)}> {Number(skill.votes)}</Badge>
    </SkillElement>
  );
};
// Skill.propTypes = {
//   title: Proptypes.string.isRequired,
//   votes: Proptypes.number.isRequired,
// };
export default Skill;
