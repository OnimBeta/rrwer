import React from 'react';
import {IFormData} from "../../types/form";
import styles from './styles.module.scss'
import {Skeleton} from "@mui/material";

interface IQuestionnaireCardProps extends IFormData {

}
const QuestionnaireCard: React.FC<IQuestionnaireCardProps> = ({
                             id = 0,
                             name= ''  ,
                             surname= '' ,
                             birthday = '01.01.2000',
                             hairColor = '',
                             eyeColor= '',
                             height = 180,
                             weight = 100 ,
                             badHabits = ['test','test','test','test','test','test','test','test','test'],
                             photo,
                           }) => {
  
  const preparedPhoto = ''
  
  
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>№ {id}</span>
      <div className={styles.info}>
        {preparedPhoto ? (
          <img src={preparedPhoto} alt='profile image' className={styles.img}/>
          ) : (
          <Skeleton variant="rectangular" width={200} height={300} className={styles.placeholder} />
        )}
        <span className={styles.rows}>
          <span>ИМЯ: {name}</ span>
          <span>ФАМИЛИЯ: {surname}</span>
          <span>ДАТА РОЖДЕНИЯ: {birthday}</span>
          <span>ЦВЕТ ВОЛОС: {hairColor}</span>
          <span>ЦВЕТ ГЛАЗ: {eyeColor}</span>
          <span>РОСТ: {height}</span>
          <span>ВЕС: {weight}</span>
          <span>ВРЕДНЫЕ ПРИВЫЧКИ: {badHabits?.join(', ')}</span>
        </span>
      </div>
    </div>
  );
};

export default QuestionnaireCard;