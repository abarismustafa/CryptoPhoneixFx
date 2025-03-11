
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
export const HowToPlay = () => {
    return (
        <>
            <div className="PageHeading">
                <h1>How To Play</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>How To Play</span></div>
                    <div className="card-body">
                        <div className="form-row" >
                            <div className="col-lg-6">
                                <div className="howtoPlay">
                                    <div className="content-how-play">
                                        <h2>Step 1 <MdOutlineKeyboardDoubleArrowRight /> <span>Download the PlayNIF50 app from the shared link.</span></h2>
                                    </div>
                                    <div className="content-how-play">
                                        <h2>Step 2 <MdOutlineKeyboardDoubleArrowRight /> <span>Select the game you wish to join (Nifty50, Bank Nifty, FinNifty, or Midcapselect Nifty).</span></h2>
                                    </div>
                                    <div className="content-how-play">
                                        <h2>Step 3 <MdOutlineKeyboardDoubleArrowRight /> <span>Join the contest by adding Rs. 50/- to your account and select your contest.</span></h2>
                                    </div>
                                    <div className="content-how-play">
                                        <h2>Step 4 <MdOutlineKeyboardDoubleArrowRight /> <span>Make a fantasy guess of the opening or closing price for your chosen contest and lock your guess. You need to make your fantasy guess till 8 a.m. for the opening contest and 1:30 pm for the closing contest from every monday to Friday.</span></h2>
                                    </div>
                                    <div className="content-how-play">
                                        <h2>Step 5 <MdOutlineKeyboardDoubleArrowRight /> <span>The results will be announced at 3:35 PM (closing) and 9:10 AM (opening) as per India Standard Time (IST).</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="video-section">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/0fZ2JH8NULI?si=RSNjODzQUsQg3yXK" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
