import Button from './Button'


const Header = ({ onAddbtn, btnText, btnColor }) => {
    return (
        <div className="header">
            <h1>Task</h1>
            <Button color={btnColor} onAddbtn={onAddbtn} text={btnText}/>
        </div>
    );
};

export default Header;