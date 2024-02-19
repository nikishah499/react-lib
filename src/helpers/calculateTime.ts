import { StatusCheckProps } from './calculateTimeProps.ts';

const statusCheck = (props: StatusCheckProps) => {
    console.log('OK...............!', props.message);
}

export default statusCheck;