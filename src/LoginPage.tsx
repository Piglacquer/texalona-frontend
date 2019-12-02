import React, { ChangeEvent, SyntheticEvent } from 'react';

interface LoginPageProps {
	signIn: Function
}

const LoginPage = (props:any) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleUsernameChange = (e:string):void => {
		console.warn('yeet e', e);
		setUsername(e);
		console.warn('yeet username', username);
	}

	const handlePasswordChange = (e:string):void => {
		setPassword(e);
	}

	const handleSignIn = () => {
		const { signIn } = props;
		signIn(username, password).then((resp:any) => console.warn(resp));
	}

	return (
		<div>
			<input type="text" value={username} onChange={e => handleUsernameChange(e.target.value)}/>
			<input type="text" value={password} onChange={e => handlePasswordChange(e.target.value)} />
			<button onClick={handleSignIn}>login</button>
		</div>
	)
};

export default LoginPage;