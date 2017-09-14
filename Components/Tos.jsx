import React, {Component} from 'react'
import Footer from "./Footer";
import { NavLink } from 'react-router-dom'


export default class Tos extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }


    render(){
        return(
            <div id="tos">
                <h1>Terms of Service (TOS)</h1>

                <div className="tos-container">
                    <h2>Contact Information</h2>
                    <h2>Phone Number: (301) 798-6192</h2>

                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Definitions</span></h3>
                    <p>“Client” The customer receiving services or products from Perfect Presence, LLC
                        “Contractor” Perfect Presence, LLC
                    </p>

                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Purpose of this document</span></h3>
                    <p>This document defines the relationship between Perfect Presence, LLC and its clients. This document is an integral part of every agreement between Perfect Presence and its clients. It applies to both written agreements and implicit agreements or work orders provided over the phone, via email, in person, etc. It is overridden by agreements between Perfect Presence, LLC and the client so long as it is stated explicitly on the agreement.
                    </p>

                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Modifications</span></h3>
                    <p>Perfect Presence, LLC has the right to modify this terms of service document without providing notice. The current terms of service are publicly posted on our website and can be viewed at the Perfect Presence website: http://www.perfectpresence.us/tos.
                        If you are not able to view the terms on the website, then you may ask for a printed copy to be mailed to you by sending us a written request.
                        Policies and Procedures
                    </p>

                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Contracts & Agreements</span></h3>
                    <p> 1. Transfer of rights to created works - It is the policy of Perfect Presence, LLC not to transfer any rights to our work if there is an outstanding balance. After the project is completed and full payment has been made according to the Payment Schedule, ownership of project materials will pass from Contractor to Client.</p>
                    <p> 2. Content collection and delay of project - We define a development state called “client delay of project” which occurs when the project is on hold for a period of longer than 30 days due to client delay (feedback, interaction, input, material or purchases/ third party expenses to be paid by client). In this event, on the day of the “client delay of project” state, any work that has been completed under the constraints of this agreement by Contractor can be billed to the client at contractor’s discretion.</p>
                    <p> 3. Termination Clause - Client or Contractor can extract themselves from this contractual obligation at any time but must provide cause and written notice of the termination of this agreement at least 24 hours before it takes effect. If client is the terminating party, client must provide payment to contractor for work completed up to that date. The amount of payment is determined by the payment schedule in the Service Proposal Document and any parts that were completed for any incomplete deliverable. If contractor is the terminating party, contractor forfeits remaining payment for services rendered during the development of the current milestone except in the case of termination due to:</p>
                    <p> <i>a</i>. Client’s inability to pay invoices or make scheduled payments</p>
                    <p> <i>b</i>. Client’s inability to provide necessary feedback, input, interaction, and materials to complete the deliverable.</p>
                    <p> <i>c</i>. Client’s inability to provide necessary purchases, expenses, or payments to third parties.</p>
                    <p> 4. All contracts are bound by the terms of service whether stated in the contract or not.</p>
                    <p> 5. Payment schedule items must be paid on the date they are due. We provide a seven day grace period after date due listed. After this grace period, work on project covered in client contract will cease until payment item is made. We have the right to refuse support and refuse to transfer materials/ information relating to the account if the grace period has lapsed.</p>
                    <p> 6. Time Estimates - The estimated date of completion is an estimate and not a hard requirement due to the unpredictability of the development process and its heavy dependence on 1) a fixed design, 2) the turnaround time and acceptance of produced items by the client, 3) other factors, and 4) factors out of our control such as acts of providence.</p>
                    <p> 7. Estimates – The estimates provided relating to the number of hours tasks, projects, or jobs will take are educated guesses and are neither ceilings nor hard quotes unless otherwise stated in the contract.</p>
                    <p> 8. If changes occur during the development process that may affect the budget or development time client will be consulted before change to development process is implemented. Also note that budgeted hours or funds may be shifted between items in the same project.</p>
                    <p> 9. In the event of business purchase or transfer of ownership of the client’s company or organization, the client contract and its obligations also transfers to the new owners.</p>


                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Invoices</span></h3>
                    <p> 1. All disputes arising out of or related to this agreement shall be filed in the court of competent jurisdiction in Prince George’s County Maryland.</p>
                    <p> 2. Clients may ask to have their current invoice sent to them at any time by making a request through support@perfpr.com, calling us, or mailing us a letter. You may not request copy of your invoice to be mailed to you with frequency higher than once every thirty days.</p>
                    <p> 3. If the amount paid by client exceeds the client’s balance, it will be held by Perfect Presence, LLC and automatically applied to any future invoices of this client such as those for future work completed and hosting. At any time, if client has a credit, they may choose to have it sent to them in the form of a check assuming they have no projects or tasks in process. Please allow seven days to process and send the check.</p>
                    <p> 4. Outstanding Invoices - If client fails to make full payment by the invoice due date, Perfect Presence, LLC reserves the right to deny service, deactivate client’s website, and/or discontinue services/support until client makes full payment of their balance. If deactivation takes place, client will be billed hourly both for the deactivation of their website and the reactivation of their website with a minimum of $50 per case. These additional deactivation costs must be paid by client before website is reactivated.</p>


                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Payments</span></h3>
                    <p> 1. Credit Card Payments – A charge of 3% will be charged for credit card transactions over $1000.00. This will be applied at our discretion.</p>
                    <p> 2. Returned Check Fee – Client will be charged $50 for any returned checks.</p>

                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Working with Perfect Presence</span></h3>
                    <p> 1. Valid Principals – We maintain a list of people allowed to communicate with us regarding your account. It is your responsibility to alert us of any changes in this list so we may act accordingly. To add or remove someone from this list, someone on the list must contact us. People whose names are on the list will be able to receive support, order work, make changes, request assets, etc.</p>
                    <p> 2. We do not tolerate the use of our services to promote any immoral or illegal activities. </p>
                    <p> 3. We neither support nor are we responsible for third party contractors that you may employ or purchase services from. We will make every possible effort to help you provided that we are being compensated at our hourly rate. </p>
                    <p> 4. 30 Day Warranty - After any project is completed, client has 30 days to request any bugs be fixed on their website. Bugs are restrained to functionality that was developed under contract. Bugs do not include upgrades or maintenance. Client will not be charged for these fixes. After the 30-day maintenance period, any work done by Contractor will be billed to Client. Note that this does not include the functions and features of any 3rd party plug-ins or software that is provided by the Client. </p>
                    <p> 5. Right to Refuse Service – Perfect Presence, LLC provides services and products to its customers at its discretion. Perfect Presence, LLC reserves the right to refuse to provide continued services at its sole discretion with or without providing cause. Perfect Presence, LLC must provide written notice if and only if Perfect Presence, LLC and client are bound by contract as dictated by provisions in the article titled “Termination clause” of this document. In extreme cases we will decline service immediately and provide written notice following refusal of service. </p>
                    <p> 6. Purchases made on behalf of client will be billed directly to the client. Hourly rates apply only to the amount of time it took evaluate and make the purchase. </p>

                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Hourly Services</span></h3>
                    <p> 1. All projects, jobs are billed at the hourly rate unless explicitly stated in the client contract. We will bill for anything that relates to your project including and non-withstanding: Meetings, Purchases, Research, Maintenance, Support, hosting changes, Mailing, Email responses, Telephone support, Modifications to website, Website construction, Graphical Modification, Graphic Design, etc. </p>
                    <p> 2. If you ask us to perform any action on your behalf, we will be billing you at the hourly rate for the time taken unless we explicitly state that we are not billing you to perform the action/task. c. If you have questions about the hourly services that we provide, please either contact info@perfpresence.com or call our operating phone number for further assistance. </p>
                    <p> 3. Minimum billing increment is 1 Hour. </p>


                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Hosting</span></h3>
                    <p> 1. Perfect Presence, LLC provides hosting services to its clients as an added service. It does not make any guarantees as to uptime, security, or safety of the hosting account unless otherwise stated in the contract. </p>
                    <p> 2. It is the obligation of the client to provide the services needed to move their website from our server if they ever choose to move their website. We will only provide them the information to do so. We will not perform any of the actual services to move their website. </p>
                    <p> 3. If client chooses to host their website on a third party host, we are not responsible for any loss of data, incompatibility, or inability to make their host work with your website. We only guarantee that it will work on a typical PHP/MYSQL compliant server. We also make no guarantees to your website’s operation on a third party server. </p>
                    <p> 4. If backups are made, there is no obligation on behalf of Perfect Presence, LLC to retrieve, repair, or rebuild any data that is lost. </p>

                    <h3><span style={{borderBottom: "2px solid rgb(51,51,51)"}}>Policies</span></h3>
                    <p> 1. Clients may not either directly or indirectly employ, solicit, or contract a current employee or former employee of Perfect Presence, LLC who has worked with Perfect Presence, LLC for a period of 18 months. </p>
                </div>

                <i className="bottom-title" >Perfect Presence, LLC © 2016 - Terms of Serivice</i>

                <Footer/>
            </div>
        )
    }
}