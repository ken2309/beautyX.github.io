import img from '../../../constants/img';
import icon from '../../../constants/icon';
interface info{
    name?: string
    avatar?: string
    token?: any
    point?: Number
    amount?: any
    rank?: string
}
const data:info = {
    name: 'Nguyen Thuy Binh',
    avatar: 'https://picsum.photos/650/976?random=1',
    point: 200,
    amount: 200,
    rank: 'vang'
}
function MenuSideBar(props:info){
    return(
        <div className="">
            <div className="avatar">
                <img src={data.avatar} alt="img"/>
                <div className="camera-icon">
                    <img src={icon.Camera} alt="icon"/>
                </div>
            </div>
             <div className="info">
                 <span>
                    {data.name}
                 </span>
                 <div className="otherStuff">
                    <div className="point">
                        <img src={icon.Ticket} alt=""/>
                        {data.point}
                    </div>
                    <div className="amount">
                        <img src={icon.Wallet} alt=""/>
                        {data.amount}.000 <span style={{'textDecoration': 'underline'}}>đ</span>
                    </div>
                    <div className="rank">
                        <img src={icon.Crown} alt=""/>
                        {data.rank}
                    </div>
                 </div>
             </div>
        </div>
    )
}
export default MenuSideBar;