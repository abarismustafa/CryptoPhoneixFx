import { Link, useParams } from "react-router-dom";
import { bankListApiwithid, contextType, newContest } from "../../../../../api/login/Login";
import { useEffect, useState } from "react";
import Select from 'react-select';
import Loader from "../../../../../common/loader/Loader";
import img1 from '../../../../../asesets/banner/what-is-bank-nifty-meaning (1).jpg'


export const Nifty50HourlyContest = ({ setBannerData }) => {
    const [loader, setLoader] = useState(false)
    const fakeData = [
        { id: '1', label: '1-50', value: '1' },
        { id: '2', label: '51-100', value: '2' },
        { id: '3', label: '101-1000', value: '3' },
        { id: '4', label: '1001', value: '4' },
    ];

    const param = useParams();

    const [bankData, setBankData] = useState(null);
    const [bankSelected, setBankSelected] = useState({ entry: [], pool: [], spots: [] });

    const [payload, setPayload] = useState({
        contestType: "",
        marketType: "",
        entry: [],
        pool: [],
        spots: [],
        page: 0,
        count: 100,
    });

    const bankChange = (selectedOption, field) => {
        setBankSelected(prev => ({
            ...prev,
            [field]: selectedOption,
        }));

        setPayload(prev => ({
            ...prev,
            [field]: selectedOption ? selectedOption.map(option => option.value) : [],
        }));
    };

    const bankList = async () => {
        try {
            const mapped = fakeData.map(item => ({
                ...item,
            }));
            setBankData(mapped);
        } catch (error) {
            // console.error("Error fetching bank list:", error);
        }
    };

    const [dataFilterData, setDataFilterData] = useState(null);

    const dataFilter = async () => {
        // const clone = { ...payload, contestType: param?.id, marketType: param?.is };
        // console.log(clone);

        // try {
        //     setLoader(true)

        //     const res = await contextType(clone);
        //     setDataFilterData(res?.data?.data);
        //     if (res?.data?.error == false) {
        //         setLoader(false)
        //     } else {
        //         setLoader(false)
        //     }
        // } catch (error) {
        //     console.error("Error filtering data:", error);
        // }
    };

    const [newData, setNewData] = useState(null)
    // console.log(newData);
    const [end_Date, setEnd_Data] = useState(null)
    const [start_Date, setstart_Date] = useState(null)
    // console.log(end_Date);


    const newContestt = async () => {
        try {
            const res = await newContest()
            // console.log(res);
            setNewData(res?.data?.data)
            setBannerData(res?.data?.data)

            const filterData = res?.data?.data?.live_contest?.find((item) => {
                return item;
            })
            setEnd_Data(filterData)
            const pcomming_contestData = res?.data?.data?.upcomming_contest?.find((item) => {
                return item;

            })
            setstart_Date(pcomming_contestData);


        } catch (error) {

        }
    }

    // useEffect(() => {
    //     bankList();
    //     dataFilter();
    //     newContestt()
    // }, [payload]); // Add payload as a dependency to trigger dataFilter on change
    useEffect(() => {

        newContestt()
    }, []);

    const isContestExpired = (endDate) => {
        const currentDate = new Date();
        const contestEndDate = new Date(endDate);
        return currentDate > contestEndDate;
    };






    // const startDate = end_Date?.end_Date;
    // const startTime = end_Date?.end_Date;
    // const endDate = end_Date?.createdAt;
    // const endTime = end_Date?.createdAt;

    // // Create full Date-Time strings and convert to timestamps
    // const contestStartTime = new Date(`${startDate}T${startTime}`).getTime();
    // const contestEndTime = new Date(`${endDate}T${endTime}`).getTime();

    // const [currentTime, setCurrentTime] = useState(new Date().getTime());
    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // // Check every second if the current time is within the allowed time window
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const now = new Date().getTime();
    //         setCurrentTime(now);

    //         // Disable button if current time is outside the start and end times
    //         if (now < contestStartTime || now > contestEndTime) {
    //             setIsButtonDisabled(true);
    //         } else {
    //             setIsButtonDisabled(false);
    //         }

    //         // Stop the timer if the current time is past the contest end time
    //         if (now > contestEndTime) {
    //             clearInterval(interval); // Stop the interval once the contest is over
    //         }
    //     }, 1000);

    //     // Cleanup interval on component unmount
    //     return () => clearInterval(interval);
    // }, [contestStartTime, contestEndTime]);



    // end_date Show


    // const match = { time: end_Date?.end_date }; // Set your match time here
    // console.log(match);


    // const [timeLeft, setTimeLeft] = useState({
    //     day: 0,
    //     hour: 0,
    //     minute: 0,
    //     second: 0,
    // });
    // const [isTimerExpired, setIsTimerExpired] = useState(false);

    // useEffect(() => {
    //     const setTimer = () => {
    //         const interval = setInterval(() => {
    //             const diff = new Date(match.time).getTime() - new Date().getTime();
    //             if (diff <= 0) {
    //                 clearInterval(interval);
    //                 setTimeLeft({ day: 0, hour: 0, minute: 0, second: 0 });
    //                 setIsTimerExpired(true); // Set the timer as expired
    //                 return; // Timer expired
    //             }
    //             const days = Math.floor(diff / (60 * 60 * 24 * 1000));
    //             const hours = Math.floor((diff % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
    //             const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    //             const seconds = Math.floor((diff % (60 * 1000)) / 1000);
    //             setTimeLeft({ day: days, hour: hours, minute: minutes, second: seconds });
    //         }, 1000);

    //         return interval; // Return the interval ID
    //     };

    //     const intervalId = setTimer(); // Start the timer when the component mounts

    //     // Cleanup on unmount or when match.time changes
    //     return () => clearInterval(intervalId);
    // }, [match.time]); // Re-run if match.time changes



    const match = {
        start_time: end_Date?.start_date,  // Match start time
        end_time: end_Date?.end_date,        // Match end time
    };
    // console.log(match);

    const [timeLeft, setTimeLeft] = useState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    });

    const [isTimerExpired, setIsTimerExpired] = useState(false);
    // console.log('isTimerExpired,', isTimerExpired);

    const [isMatchStarted, setIsMatchStarted] = useState(false);  // Track if match has started

    useEffect(() => {
        const setTimer = () => {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const startDiff = new Date(match.start_time).getTime() - now;
                const endDiff = new Date(match.end_time).getTime() - now;

                // console.log(endDiff, 'endDiff');

                // Check if the match has started
                if (startDiff > 0) {
                    // Match hasn't started yet
                    setIsMatchStarted(false);

                    // Calculate remaining time until match start
                    const days = Math.floor(startDiff / (60 * 60 * 24 * 1000));
                    const hours = Math.floor((startDiff % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
                    const minutes = Math.floor((startDiff % (60 * 60 * 1000)) / (60 * 1000));
                    const seconds = Math.floor((startDiff % (60 * 1000)) / 1000);

                    setTimeLeft({ day: days, hour: hours, minute: minutes, second: seconds });
                } else {
                    // Match has started
                    setIsMatchStarted(true);

                    // If the match has already ended, clear the timer and set it as expired
                    if (endDiff <= 0) {
                        clearInterval(interval);
                        setTimeLeft({ day: 0, hour: 0, minute: 0, second: 0 });
                        setIsTimerExpired(true);  // Timer expired, match has ended
                        return;
                    }

                    // Calculate remaining time for the end of the match
                    const days = Math.floor(endDiff / (60 * 60 * 24 * 1000));
                    const hours = Math.floor((endDiff % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
                    const minutes = Math.floor((endDiff % (60 * 60 * 1000)) / (60 * 1000));
                    const seconds = Math.floor((endDiff % (60 * 1000)) / 1000);

                    setTimeLeft({ day: days, hour: hours, minute: minutes, second: seconds });
                }
            }, 1000);

            return interval;
        };

        if (match.start_time && match.end_time) {
            const intervalId = setTimer();

            return () => clearInterval(intervalId);
        }
    }, [match.start_time, match.end_time]);

    // end_date Show


    // start_date Show

    const matchStart = { time: start_Date?.start_date }; // Set your match time here
    // console.log(matchStart);


    const [timeeLeft, setTimeeLeft] = useState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    });

    // console.log(timeeLeft, ';l;l');

    const [isTimerrExpired, setIsTimerrExpired] = useState(false);

    useEffect(() => {
        const setTimer = () => {
            const interval = setInterval(() => {
                const diff = new Date(matchStart.time).getTime() - new Date().getTime();
                if (diff <= 0) {
                    clearInterval(interval);
                    setTimeeLeft({ day: 0, hour: 0, minute: 0, second: 0 });
                    setIsTimerrExpired(true); // Set the timer as expired
                    return; // Timer expired
                }
                const days = Math.floor(diff / (60 * 60 * 24 * 1000));
                const hours = Math.floor((diff % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
                const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
                const seconds = Math.floor((diff % (60 * 1000)) / 1000);
                setTimeeLeft({ day: days, hour: hours, minute: minutes, second: seconds });
            }, 1000);

            return interval; // Return the interval ID
        };

        const intervalId = setTimer(); // Start the timer when the component mounts

        // Cleanup on unmount or when match.time changes
        return () => clearInterval(intervalId);
    }, [matchStart.time]); // Re-run if match.time changes

    // start_date Show



    // button disabled live

    // const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // // console.log(isButtonEnabled);


    // useEffect(() => {
    //     const checkTime = () => {
    //         const currentTime = new Date();
    //         const currentHours = currentTime.getHours();
    //         const currentMinutes = currentTime.getMinutes();

    //         // Define the time range for button enabling (9:30 AM - 2:00 PM)
    //         const startHour = 9;
    //         const startMinutes = 30;
    //         const endHour = 14;
    //         const endMinutes = 0;

    //         // Check if current time falls between the start and end time
    //         if (
    //             (currentHours > startHour || (currentHours === startHour && currentMinutes >= startMinutes)) &&
    //             (currentHours < endHour || (currentHours === endHour && currentMinutes <= endMinutes))
    //         ) {
    //             setIsButtonEnabled(true);
    //         } else {
    //             setIsButtonEnabled(false);
    //         }
    //     };

    //     // Run checkTime initially and then every minute
    //     checkTime();
    //     const intervalId = setInterval(checkTime, 60000); // 60000 ms = 1 minute

    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(intervalId);
    // }, []);



    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const currentTime = new Date();
            const currentHours = currentTime.getHours();
            const currentMinutes = currentTime.getMinutes();
            const startHour = 9;
            const startMinutes = 30;
            const endHour = 14;
            const endMinutes = 0;


            if (
                (currentHours > startHour || (currentHours === startHour && currentMinutes >= startMinutes)) &&
                (currentHours < endHour || (currentHours === endHour && currentMinutes <= endMinutes))
            ) {
                setIsButtonEnabled(true);
            } else {
                setIsButtonEnabled(false);
            }
        };


        checkTime();
        const intervalId = setInterval(checkTime, 60000); // 60000 ms = 1 minute


        return () => clearInterval(intervalId);
    }, []);

    // Automatically re-run daily by checking for day change
    useEffect(() => {
        const currentDate = new Date().toDateString();

        // Check daily if the date changes
        const dayChangeChecker = setInterval(() => {
            const newDate = new Date().toDateString();
            if (newDate !== currentDate) {
                // Re-run the time checker when the date changes
                setIsButtonEnabled(false);
            }
        }, 60000); // Check every minute

        return () => clearInterval(dayChangeChecker);
    }, []);


    // button disabled

    // button disabled upcomming
    const [isButtonEnabledupcomming, setIsButtonEnabledupcomming] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const currentTime = new Date();

            const currentHour = currentTime.getHours();
            const currentMinutes = currentTime.getMinutes();

            // Set start and end times
            // 16
            const startHourToday = 16; // 4:00 PM (16:00 in 24-hour format)
            const endHourNextDay = 8;  // 8:00 AM next day

            const isWithinEnabledTime = () => {
                if (currentHour >= startHourToday) {
                    // Case: After 4:00 PM today
                    return true;
                } else if (currentHour < endHourNextDay) {
                    // Case: Before 8:00 AM the next day
                    return true;
                }
                return false;
            };

            // Enable or disable button based on the time
            setIsButtonEnabledupcomming(isWithinEnabledTime());
        };

        // Check time on component mount and set an interval to check periodically (e.g., every minute)
        checkTime();
        const intervalId = setInterval(checkTime, 60000); // Check every 1 minute (60000ms)

        // Cleanup interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);


    // button disabled upcomming

    return (
        <>
            {loader && <Loader />}
            {/* <div className="PageHeading">
                <h1>Nifty50 League</h1>
            </div> */}

            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-lg-4">
                        <div className="mb-3">
                            <label htmlFor="BeneficiaryBank" className="form-label me-3">Entry</label>
                            <Select
                                isMulti
                                value={bankSelected.entry}
                                name="entry"
                                options={bankData}
                                className="games-dropdown-2 customsection customsection-2"
                                classNamePrefix="select"
                                onChange={(selectedOption) => bankChange(selectedOption, 'entry')}
                                placeholder="Select Entry"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label me-3">Prize Pool</label>
                            <Select
                                isMulti
                                value={bankSelected.pool}
                                name="pool"
                                options={bankData}
                                className="games-dropdown-2 customsection customsection-2"
                                classNamePrefix="select"
                                onChange={(selectedOption) => bankChange(selectedOption, 'pool')}
                                placeholder="Select Prize Pool"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label me-3">Spots</label>
                            <Select
                                isMulti
                                value={bankSelected.spots}
                                name="spots"
                                options={bankData}
                                className="games-dropdown-2 customsection customsection-2"
                                classNamePrefix="select"
                                onChange={(selectedOption) => bankChange(selectedOption, 'spots')}
                                placeholder="Select Spots"
                            />
                        </div>
                    </div> */}
                    {/* <div>
                        <h1>Contest Timer</h1>
                        <p>Current Time: {new Date(currentTime).toLocaleTimeString()}</p>
                        <button disabled={isButtonDisabled}>
                            {isButtonDisabled ? "Join Time Over" : "Join Contest"}
                        </button>
                    </div> */}
                    <div className="col-lg-12">
                        <div className="h1-heading mb-3">
                            <h2>Closing Index Contests</h2>
                            <hr />
                        </div>

                    </div>

                    {newData && newData?.live_contest?.map((item) => {
                        const nameParts = item?.name?.split(" (");
                        return (
                            <div className="col-xl-6 wid-100" key={item._id}>
                                <div className="contest-card"
                                    style={{ backgroundImage: `url(${`${item?.banner_image}` ? `https://schedule.playnif50.com/api/cloudinary/${item?.banner_image}` : 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Nifty_02f30e308a.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                    <div className="text-align-center timer-set">
                                        <p className="subtext">
                                            <h2>{nameParts[0]}</h2>
                                            <h3>({nameParts[1]}</h3>
                                        </p>

                                        <Link
                                            to={!isButtonEnabled ? "#" : `/select-palyers/${item._id}`}
                                            className={`join-button ${!isButtonEnabled ? "disabled-link" : ""}`}
                                            onClick={(e) => !isButtonEnabled && e.preventDefault()}
                                        >
                                            {!isButtonEnabled ? "Join Time Over" : "Join Contest"}
                                        </Link>

                                        {/* <Link
                                            to={isButtonEnabled ? "#" : `/select-players/${item._id}`}  // Disable link navigation if isButtonEnabled is true
                                            className={`join-button ${isButtonEnabled ? "disabled-link" : ""}`}  // Add disabled styling class
                                            onClick={(e) => {
                                                if (isButtonEnabled) {
                                                    e.preventDefault();  // Prevent navigation if button is disabled
                                                }
                                            }}
                                        >
                                            {isButtonEnabled ? "Join Time Over" : "Join Contest"}
                                        </Link>
                                        ); */}
                                    </div>

                                    <div className="set-contest-body">
                                        <div className="contest-card-body">
                                            <div className="prize">
                                                <p className="currency">Price Money &#8377; {item?.reward}</p>
                                            </div>
                                            <div className="entry-fee">
                                                <p>EntryFee: <strong>{item?.isFree == true ? 'Free' : item?.entryFee}</strong></p>
                                            </div>
                                        </div>
                                        <p>
                                            {timeLeft.hour} Hours, {timeLeft.minute} Minutes, {timeLeft.second} Seconds
                                        </p>
                                    </div>

                                    <div className="contest-card-footer">
                                        <p>Teams Left {item?.contestParticipates}</p>
                                        <p>{item?.maxSpots} Max Spots</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    {/* {newData && newData?.live_contest?.map((item) => (
                        <div className="col-xl-6 wid-100" key={item._id}>
                            <div className="contest-card"
                                style={{ backgroundImage: `url(${`${item?.banner_image}` ? `https://backoffice.adamclick.com/api/cloudinary/${item?.banner_image}` : 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Nifty_02f30e308a.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <div className="text-align-center timer-set">
                                    <p className="subtext">{item?.name}</p>
                                    <Link
                                        to={isMatchStarted ? "#" : `/select-palyers/${item._id}`}
                                        className={`join-button ${isMatchStarted ? "disabled-link" : ""}`}
                                        onClick={(e) => isMatchStarted && e.preventDefault()}
                                    >
                                        {isMatchStarted ? "Join Time Over" : "Join Contest"}
                                    </Link>
                                </div>
                                <div className="set-contest-body">
                                    <div className="contest-card-body">
                                        <div className="prize">
                                            <p className="currency">Price Money &#8377; {item?.reward}</p>

                                        </div>
                                        <div className="entry-fee">
                                            <p>EntryFee: <strong>{item?.isFree == true ? 'Free' : item?.entryFee}</strong></p>

                                        </div>
                                    </div>
                                    <p>
                                        {timeLeft.hour} Hours, {timeLeft.minute} Minutes, {timeLeft.second} Seconds
                                    </p>
                                </div>
                                <div className="contest-card-footer">
                                    <p>Teams Left {item?.contestParticipates}</p>
                                    <p>{item?.winnerPercentage} % Teams</p>
                                </div>
                            </div>
                        </div>
                    ))} */}


                    <div className="col-lg-12">
                        <div className="h1-heading mb-3">
                            <h2>Opening Index Contests</h2>
                            <hr />
                        </div>

                    </div>
                    {newData && newData?.upcomming_contest?.map((item) => {
                        const nameParts = item?.name?.split(" (");
                        return (

                            <div className="col-xl-6 wid-100" key={item._id}>
                                <div className="contest-card"
                                    style={{ backgroundImage: `url(${`https://schedule.playnif50.com/api/cloudinary/${item?.banner_image}` ? `https://schedule.playnif50.com/api/cloudinary/${item?.banner_image}` : 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Nifty_02f30e308a.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                    <div className="contest-card-header">


                                    </div>
                                    <div className="text-align-center timer-set">
                                        <p className="subtext">
                                            <h2>{nameParts[0]}</h2>
                                            <h3>({nameParts[1]}</h3>
                                        </p>
                                        {/* <Link
                                            to={isTimerrExpired ? "#" : `/select-palyers/${item._id}`}
                                            className={`join-button ${isTimerrExpired ? "disabled-link" : ""}`}
                                            onClick={(e) => isTimerrExpired && e.preventDefault()}
                                        >
                                            {isTimerrExpired ? "Join Time Over" : "Join Contest"}
                                        </Link> */}

                                        <Link
                                            to={!isButtonEnabledupcomming ? "#" : `/select-palyers/${item._id}`}
                                            className={`join-button ${!isButtonEnabledupcomming ? "disabled-link" : ""}`}
                                            onClick={(e) => !isButtonEnabledupcomming && e.preventDefault()}
                                        >
                                            {!isButtonEnabledupcomming ? "Join Time Over" : "Join Contest"}
                                        </Link>


                                    </div>

                                    <div className="set-contest-body">

                                        <div className="contest-card-body">
                                            <div className="prize">
                                                <p className="currency">Price Money &#8377; {item?.reward}</p>

                                            </div>
                                            <div className="entry-fee">
                                                <p>EntryFee: <strong>{item?.isFree == true ? 'Free' : item?.entryFee}</strong></p>

                                            </div>

                                        </div>
                                        <p>
                                            {/* {timeeLeft.day} day */}
                                            {timeeLeft.hour} Hours, {timeeLeft.minute} Minutes, {timeeLeft.second} Seconds
                                        </p>
                                    </div>
                                    <div className="contest-card-footer">
                                        <p>Teams Left {item?.contestParticipates}</p>
                                        <p>{item?.maxSpots} Max Spots</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                    <div className="col-lg-12">
                        <div className="h1-heading mb-3">
                            <h2>Stocks</h2>
                            <hr />
                        </div>

                    </div>

                    <div className="col-xl-12 wid-100" >
                        <div className="contest-cardd"
                        // style={{ backgroundImage: `url(${`https://backoffice.adamclick.com/api/cloudinary/${item?.banner_image}` ? `https://backoffice.adamclick.com/api/cloudinary/${item?.banner_image}` : 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Nifty_02f30e308a.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <img src="https://img.freepik.com/free-vector/coming-soon-background-with-three-focus-lights_1017-31450.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
