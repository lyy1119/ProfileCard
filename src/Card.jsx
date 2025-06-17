import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import config from './config/info.yaml';


export default function Card(props) {
    const layout    = props.layout;
    const theme     = props.theme;

    const avatar    = config.avatar;
    const name      = config.name;
    const title     = config.title;
    const location  = config.location;

    console.log(avatar);
    console.log(config);

    return(
        <div className={`Card-Layout--${layout}`}>
            {/* avatar */}
            <div className="Card-Avatar">
                <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={avatar}/>
            </div>
            <div className='Card-Name'>
                <p>{name}</p>
            </div>
            <div className='Card-Title'>
                <p>{title}</p>
            </div>
            <div className='Card-Location'>
                <p>{location}</p>
            </div>
            <div className='Card-Social'>
                <p>Social Here</p>
                <p>Github:</p>
                <p>Blog:</p>
            </div>
            <div className='Card-skill'>
                <p>Skill here</p>
            </div>
        </div>
    );
}