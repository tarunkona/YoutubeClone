import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'; 
function SearchPage(){
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2> FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.googleusercontent.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s176-c-k-c0x00ffffff-no-rj"
            Channel="take U forward"
            verified
            subs="383K"
            id="@takeUforward"
            description="Hey, I am a Software Engineer. Where? You can find that on my LinkedIn. Also, I am a Candidate Master(2020) at Codeforces ..."
            />

            <hr/>

            <VideoRow
            image="https://i3.ytimg.com/vi/kMSBvlZ-_HA/maxresdefault.jpg"
            title="BS-20. Minimise Maximum Distance between Gas Stations | 3 Approaches | Heap | Binary Search"
            views="15K views"
            timestamp="13 days ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/thUd_WJn6wk/maxresdefault.jpg"
            title="BS 19. Painter's Partition and Split Array - Largest Sum"
            views="11K views"
            timestamp="2 weeks ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/Z0hwjftStI4/maxresdefault.jpg"
            title="BS-18. Allocate Books or Book Allocation | Hard Binary Search"
            views="22K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/R_Mfw4ew-Vo/maxresdefault.jpg"
            title="BS-17. Aggressive Cows | Binary Search Hard"
            views="15K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/uZ0N_hZpyps/maxresdefault.jpg"
            title="BS-16. Kth Missing Positive Number | Maths + Binary Search"
            views="14.6K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/MG-Ac4TAvTY/maxresdefault.jpg"
            title="BS-15. Capacity to Ship Packages within D Days"
            views="8.9K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/UvBKTVaG6U8/maxresdefault.jpg"
            title="BS-14. Find the Smallest Divisor Given a Threshold | Binary Search"
            views="7.1K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/TXAuxeYBTdg/maxresdefault.jpg"
            title="BS-13. Minimum days to make M bouquets | Binary Search"
            views="10K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/qyfekrNni90/maxresdefault.jpg"
            title="BS-12. Koko Eating Bananas"
            views="14K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/rjEJeYCasHs/maxresdefault.jpg"
            title="BS-11. Find the Nth root of an Integer"
            views="11K views"
            timestamp="2 months ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="We have solved the problem, and we have gone from brute force and ended with the most optimal ..."
            />
            <VideoRow
            image="https://i3.ytimg.com/vi/_2iQOQiCzOM/maxresdefault.jpg"
            title="Striver's SDE SHEET CHALLENGE 2023 | 2.25L Worth Prizes | Sheet for Interviews"
            views="85K views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/ytc/AOPolaQygjiMgnSw5zUP1F_PyEkcGBmfaE8HMq7S_xu_=s48-c-k-c0x00ffffff-no-rj"
            channel="take U forward"
            description="SDE Sheet contains very handily crafted and picked top coding interview questions from different topics of Data Structures & ..."
            />


        </div>
    );
}
export default SearchPage;