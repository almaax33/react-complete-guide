import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { uiActions } from '../../store/index';
import { useDispatch } from 'react-redux'

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = ()=>{
    dispatch(uiActions.toggle())
  } 
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={onClickHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
