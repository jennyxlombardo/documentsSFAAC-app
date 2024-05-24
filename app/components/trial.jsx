'use client'

import './styles.css'
import React, { useState, useEffect, useRef } from 'react';

const Formula = () => {
 
  return (
    <div id="sheet" className="container">
      <div className="panel main-header-panel">
        <header className="main-header panel-header">
          <div className="pull-right">
            
             <input id="totalGrants" className='pl-2 mb-2 rounded-lg text-black' placeholder='MM/DD/YYYY' type="date"  />
                
            <div className="xml-download">
              <button id="download-btn" type="button" title="Download" >Download</button>
            </div>        
          </div>
          <div className="school-heading">
            <h1 id="school-name">University of the United States (UUS)</h1>
            <h2>Undergraduate College Financing Plan</h2>
            <input id="" className="rounded text-black" type="text" placeholder='Student Name, Identifier'></input>
          </div>
        </header>
      </div>

      <table id="costs-table" className="table numbers" cellSpacing="0">
        <thead>
          <tr>
            <th colspan="3">Total Cost of Attendance 2024-2025</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row header">
            <td className=""></td>
            <td className="line-value text-center">On Campus Residence</td>
            <td className="line-value text-center">Off Campus Residence</td>
          </tr>
          <tr className="row">
            <td><span className="line-text">Tuition and Fees</span></td>
            <td className="line-value text-center" >
              <input id="tuitionAndFees" type="text" className="border border-gray rounded" />
                      </td>
         <td className="line-value text-center" >
              <input id="tuitionAndFees" type="text" className="border border-gray rounded" />
            </td>
          </tr>
          <tr className="row">
            <td><span className="line-text">Housing and Food</span></td>
            <td className="line-value text-center">
              <input id="housingAndFoodOnCampus" type="text" className="border border-gray rounded"  />
            </td>
            <td className="line-value text-center">
              <input id="housingAndFoodOffCampus" type="text" className="border border-gray rounded" />
            </td>
          </tr>
          <tr className="row">
            <td><span className="line-text">Books and Supplies</span></td>
            <td className="line-value text-center">
              <input id="booksAndSupplies" type="text" className="border border-gray rounded"  />
            </td>  <td className="line-value text-center" >
              <input id="booksAndSupplies" type="text" className="border border-gray rounded"  />
            </td>
          </tr>
          <tr className="row">
            <td><span className="line-text">Transportation</span></td>
            <td className="line-value text-center" >
              <input id="transportation" type="text" className="border border-gray rounded"/>
                      </td>
                      <td className="line-value text-center" >
              <input id="transportation" type="text" className="border border-gray rounded" />
            </td>
          </tr>
          <tr className="row">
            <td><span className="line-text">Other Education Costs</span></td>
            <td className="line-value text-center">
              <input id="otherEducationCosts" className="border border-gray rounded" type="text"   />
                      </td>
            <td className="line-value text-center" >
              <input id="otherEducationCosts"  className="border border-gray rounded"type="text"  />
            </td>
          </tr>
          <tr>
            <td><span className="line-text"><span id="costs-total-estimated-cost-explain" className="line-text strong">Estimated Cost of Attendance</span></span></td>
            <td className="line-value text-center">
              <input id="totalEstimatedCostOnCampus"  className="border border-gray rounded"type="text"   />
              <span className="per-year">/ yr</span>
            </td>
            <td className="line-value text-center">
              <input id="totalEstimatedCostOffCampus" className="border border-gray rounded" type="text"   />
              <span className="per-year">/ yr</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table id="family-table" cellSpacing="0">
        <thead>
          <tr>
            <th colspan="2">Student Aid Index</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span id="family-fafsa-explain">
                <strong>Based on the FAFSA</strong><br />
                <span className="no-margin-note">As calculated by the institution using information reported on the FAFSA or to your institution.</span>
              </span>
            </td>
            <td>
              <input id="familyFafsaCost" className="border border-gray rounded" type="text"  />
              <span className="per-year">/ yr</span>
            </td>
          </tr>
          <tr>
            <td>
              <span id="family-institution-explain">
                <strong>Based on Institutional Methodology</strong><br />
                <span className="no-margin-note">Used by many private institutions in addition to the FAFSA.</span>
              </span>
            </td>
            <td>
              <input id="familyInstitutionCost" className="border border-gray rounded" type="text"   />
              <span className="per-year">/ yr</span>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Scholarship and Grant Options</h2>
      <p>Scholarships and Grants are considered "Gift" aid - no repayment is needed.</p>
      <section className="content numbers">
        <table id="scholarships-table" className="table numbers" cellSpacing="0">
          <thead>
            <tr>
              <th colspan="2">Scholarships</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2"><span className="line-text">Merit-Based Scholarships</span></td>
            </tr>
            <tr className="row">
              <td><span className="">Scholarships From Your School</span></td>
              <td>
                <input id="scholarshipsSchool" type="text" className="border border-gray rounded"  />
              </td>
            </tr>
            <tr className="row">
              <td><span className="">Scholarships From Your State</span></td>
              <td>
                <input id="scholarshipsState" className="border border-gray rounded" type="text"  />
              </td>
            </tr>
            <tr className="row">
              <td><span className="line-text">Other Scholarships</span></td>
              <td>
                <input id="scholarshipsOther" className="border border-gray rounded" type="text"  />
              </td>
            </tr>
            <tr>
              <td><span className="line-text">Employer Paid Tuition Benefits</span></td>
              <td>
                <input id="employerPaidTuitionBenefits" className="border border-gray rounded" type="text"  />
              </td>
            </tr>
            <tr>
              <td><span className="strong">Total Scholarships</span></td>
              <td>
                <input id="totalScholarships" className="border border-gray rounded" type="text" />
                <span className="per-year">/ yr</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <aside className="aside">
        <table id="grants-table" className="table numbers" cellSpacing="0">
          <thead>
            <tr>
              <th colspan="2">Grants</th>
            </tr>
          </thead>
                  <tbody>
                  <tr>
              <td colspan="2"><span className="line-text">Merit-Based Scholarships</span></td>
            </tr>
            <tr className="row">
              <td><span className="line-text">Federal Pell Grant</span></td>
              <td>
                <input id="grantsFederalPell" className="border border-gray rounded" type="text" />
              </td>
            </tr>
            <tr className="row">
              <td><span className="line-text">Grants From Your School</span></td>
              <td>
                <input id="grantsInstitution" className="border border-gray rounded" type="text" />
              </td>
            </tr>
            <tr className="row">
              <td><span className="line-text">Grants From Your State</span></td>
              <td>
                <input id="grantsState" className="border border-gray rounded" type="text"  />
              </td>
            </tr>
            <tr className="row">
              <td><span className="line-text">Other Grants</span></td>
              <td>
                <input id="grantsOther" className="border border-gray rounded" type="text" />
              </td>
            </tr>
            <tr>
              <td><span className="strong">Total Grants</span></td>
              <td>
                <input id="totalGrants" className="border border-gray rounded" type="text"   />
                <span className="per-year">/ yr</span>
              </td>
            </tr>
          </tbody>
        </table>
      </aside>
      <table id="va-education-benefit-table" className="table numbers" cellSpacing="0">
        <thead>
          <tr>
            <th colspan="2">VA Education Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="line-text strong">VA Education Benefits<br></br><span className="no-margin-note"></span></span>
            </td>
            <td>
                <input id="totalGrants" className="border border-gray rounded" type="text"  />
                <span className="per-year">/ yr</span>
              </td>
          </tr>
        </tbody>
      </table>
               
      <table id="net-price-table" className="table numbers accent" cellSpacing="0">
        <thead>
          <tr>
            <th colspan="2">College Costs You Will Be Required to Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="line-text strong">Net Price To You<br></br><span className="no-margin-note">Total cost of attendance minus total grants and total scholarships</span></span>
            </td>
            <td>
                <input id="totalGrants" className="border border-gray rounded" type="text"  />
                <span className="per-year">/ yr</span>
              </td>
          </tr>
        </tbody>
      </table>
 
      <h2>Loan and Work Options to Pay the Net Price to You</h2>
      <p>You must repay loans, plus interest and fees.</p>
      <div className="content numbers flex gap-5">
         <div className='flex-col '>
              <table id="loan-options-table" className="table numbers" cellSpacing="0">
          <thead>
            <tr>
              <th colspan="3">Loan Options<sup>*</sup></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2"><span className="line-text">Federal Direct Subsidized Loan<span className="inline-note">
                (<span id="loan-options-federal-direct-subsidized-rate" className="percent">x.xx%</span> interest rate)
                (<span id="loan-options-federal-direct-subsidized-loan-origination_fee" className="interest">x.xx%</span> origination fee)</span>
              </span></td>
              <td>
                <input id="totalGrants" className="border border-gray rounded" type="text"  />
                <span className="per-year">/ yr</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2"><span className="line-text">TFC Private Loan<span className="inline-note">
                (<span id="loan-options-federal-direct-unsubsidized-rate" className="percent">12.99%</span> interest rate)
                (<span id="loan-options-federal-direct-unsubsidized-loan-origination_fee" className="interest">x.xx%</span> origination fee)</span>
              </span></td>
              <td>
                <input id="totalGrants" className="border border-gray rounded" type="text"  />
                <span className="per-year">/ yr</span>
              </td>
            </tr>
    
            <tr>
              <td colSpan="2"><span className="line-text strong">Total Loan Options</span></td>
              <td>
                <input id="totalGrants" className="border border-gray rounded" type="text"  />
                <span className="per-year">/ yr</span>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className='w-auto'><sup>*</sup> For federal student loans, origination fees are deducted from loan proceeds.</h3>
        </div>
         <div className=''>
              <table id="other-options-table" className="table numbers " cellSpacing="0">
          <thead>
            <tr>
              <th colspan="2">Other Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="line-text">You may have other options to repay the remaining costs. These include:
                  <ul id="other-options-list">
                    <li>Tuition payment plan offered by the institution</li>
                    <li>Parent PLUS loans, which your parent can apply for</li>
                    <li>Non-Federal Private education loan, which you or your parent can apply for after passing a credit check</li>
                    <li>Other Military or National Service Benefits</li>
                  </ul>
                </span>
              </td>
            </tr>
    
          </tbody>
        </table>
        <div className="aside-group panel simple loans min-h-0" >
          <header className="header info-header">
            <h2 className="default-font">Customized Information from UUS</h2>
          </header>
                  </div>
                  </div>
      </div>
         

  
      <section className="content numbers float-right w-[423px]">
        <table id="work-options-table" className="table numbers" cellSpacing="0">
          <thead>
            <tr>
              <th colspan="2">Work Options</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td><span className="line-text">Federal Work-Study</span></td>
              <td>
                <input id="workOptionsWorkStudy" className="border border-gray rounded" type="text"  />
              </td>
            </tr>
            <tr className="row">
              <td><span className="line-text">Hours Per Week</span></td>
              <td>
                <input id="workOptionsHoursPerWeek" className="border border-gray rounded" type="text"   />
              </td>
            </tr>
            <tr className="row">
              <td><span className="line-text">Other Campus Job</span></td>
              <td>
                <input id="workOptionsOtherCampusJob" className="border border-gray rounded" type="text" />
              </td>
            </tr>
            <tr>
              <td><span className="strong">Total Work</span></td>
              <td>
                <input id="workOptionsTotal" className="border border-gray rounded" type="text"   />
                <span className="per-year">/ yr</span>
              </td>
            </tr>
          </tbody>
        </table>
          </section>

      <div className="mt-2">
        <header className="header info-header">
          <h2 className="default-font">* Loan Amounts</h2>
        </header>
        <p>Note that the amounts listed are the maximum available to you. To learn about loan repayment choices and calculate your Federal Loan monthly payment, go to:
          <a target="_blank" href="https://studentaid.gov/manage-loans/repayment/plans">https://studentaid.gov/manage-loans/repayment/plans</a>.
        </p>
          </div>
          
    <div className="gap-5 float-left"> 
        <header className="header info-header">
          <h2 className="default-font">For More Information</h2>
        </header>
        <div className="address-container">
          <span id="info-school-name" className="address-name">University of the United States (UUS)</span>
          <br />
          <span id="info-financial-aid-office" className="address-name">Financial Aid Office</span>
          <div className="address">
            <div id="info-address-line-1" className="address-line">123 Main Street</div>
            <div id="info-address-line-2" className="address-line"></div>
            <div id="info-address-city-state-zip" className="address-line">Anytown, ST 12345</div>
            <div id="info-address-phone" className="address-line">Telephone: (123) 456-7890</div>
            <div id="info-address-email" className="address-line">E-mail: financialaid@uus.edu</div>
          </div>
        </div>
    </div>


      <div className="clearfix"></div>

      <div className="aside-group panel simple loans mt-2">
        <header className="header info-header">
          <h2 className="default-font">Next steps</h2>
        </header>
      </div>

      <div className="clearfix"></div>

      <table id="glossary" cellSpacing="0">
        <thead>
          <tr>
            <th>Glossary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul id="glossary-list">
                <li id="term-coa">
                  <strong>Cost of Attendance (COA):</strong> The total amount (not including grants and scholarships) that it will cost you to go to school during the 2024–25 school year. COA includes tuition and fees; housing and food; and allowances for books, supplies, transportation, loan fees, and dependent care. It also includes miscellaneous and personal expenses, such as an allowance for the rental or purchase of a personal computer; costs related to a disability; and reasonable costs for eligible study-abroad programs.
                </li>
                <li><strong>Direct Subsidized Loan:</strong> Loans that the U.S. Department of Education pays the interest on while you’re in school at least half-time, for the first six months after you leave school (referred to as a grace period*), and during a period of deferment (a postponement of loan payments).</li>
                <li><strong>Direct Unsubsidized Loan:</strong> Loans that the borrower is responsible for paying the interest on during all periods. If you choose not to pay the interest while you are in school and during grace periods and deferment or forbearance periods, your interest will accrue (accumulate) and be capitalized (that is, your interest will be added to the principal amount of your loan).</li>
                <li id="term-expected-family-contribution">
                  <strong>Student Aid Index:</strong> A number used by your school to calculate the amount of federal student aid you are eligible to receive. It is based on the financial information provided in your Free Application for Federal student Aid (the FAFSA). This is not the amount of money your family will have to pay for college, nor is it the amount of federal student aid you will receive.
                </li>
                <li id="term-federal-work-study">
                  <strong>Federal Work-Study:</strong> A federal student aid program that provides part-time employment while the student is enrolled in school to help pay his or her education expenses. The student must seek out and apply for work-study jobs at his or her school. The student will be paid directly for the hours he or she works may not automatically be credited to pay for institutional tuition or fees. The amount you earn cannot exceed the total amount awarded by the school for the award year. The availability of work-study jobs varies by school. Please note that Federal Work-Study earnings may be taxed in certain scenarios; however the income you earn will not be counted against you when calculating your Student Aid Index on the FASFA.
                </li>
                <li id="term-grants-and-scholarships">
                  <strong>Grants and Scholarships:</strong> Student aid funds that do not have to be repaid. Grants are often need-based, while scholarships are usually merit-based. Occasionally you might have to pay back part or all of a grant if, for example, you withdraw from school before finishing a semester. If you use a grant or scholarship to cover your living expenses, the amount of your scholarship may be counted as taxable income on your tax return.
                </li>
                <li id="term-option-loans">
                  <strong>Loans:</strong> Borrowed money that must be repaid with interest. Loans from the federal government typically have a lower interest rate than loans from private lenders. Federal loans, listed from most advantageous to least advantageous, are called Direct Subsidized Loans, Direct Unsubsidized Loans, and Parent PLUS Loans. You can find more information about federal loans at StudentAid.gov.
                </li>
                <li id="term-net-price">
                  <strong>Net Price:</strong> An estimate of the actual cost that a student and his or her family need to pay in a given year to cover education expenses for the student to attend a particular school. Net price is determined by taking the institution's cost of attendance and subtracting any grants and scholarships for which the student may be eligible.
                </li>
                <li id="nonfed-pvt-edu">
                  <strong>Non-Federal Private Education Loan:</strong> A private education loan is a loan issued expressly for postsecondary education expenses to a borrower (either through the educational institution or directly to the borrower) from a private educational lender, rather than as a Title IV, HEA loan offered by the Department of Education.
                </li>
                <li id="origination-fees">
                  <strong>Origination Fees:</strong> An upfront fee charged by a lender for processing a new loan application. It is compensation for putting the loan in place. Origination fees are quoted as a percentage of the total loan.
                </li>
                <li id="pplus-loan">
                  <strong>Parent Plus Loan:</strong> A loan available to the parents of dependent undergraduate students for which the borrower is fully responsible for paying the interest regardless of the loan status.
                </li>
                <li id="term-tgp">
                  <strong>Teach Grant Program:</strong> Provides grants of up to $4,000 a year to students who are completing or plan to complete course work needed to begin a career in teaching. If you do not meet the requirements of your service obligation, all TEACH Grants you received will be converted to Direct Unsubsidized Loans. You must repay these loans in full, with interest charged from the date of each TEACH Grant disbursement. Service obligation information can be found at <a href="https://studentaid.gov/understand-aid/types/grants/teach" target="_blank">https://studentaid.gov/understand-aid/types/grants/teach</a>.
                </li>
                <li id="tution-payment-plan">
                  <strong>Tuition Payment Plan:</strong> A tuition payment plan offered by an institution may allow students to spread out their payments. It includes an extension of credit of 90 days or less in which the educational institution is the lender, or of one year or less where an interest rate will not be applied to the credit payment.
                </li>
                <li id="term-option-VABenefit">
                  <strong>VA Education Benefits:</strong> Benefits that help Veterans, service members, and their qualified family members with needs like paying college tuition, finding the right school or training program, and getting career counseling. You can find more information here: <a href="https://www.va.gov/education/" target="_blank">https://www.va.gov/education/</a>.
                </li>
                <li className="strong">For more information visit <a href="https://studentaid.gov" target="_blank">https://studentaid.gov</a>.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Formula;