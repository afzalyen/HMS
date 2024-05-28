
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const downloadPDF = (doctorName, doctorEmail, patientName, patientNumber, patientEmail, description, age, sex, date) => {
    const docDefinition = {
        content: [
            createHospitalHeader(), // Add the hospital header
            { text: 'Prescription', style: 'header' },
            { text: 'Mediwave Hospital', style: 'subheader' },
            { text: `Date: ${date}`, style: 'details' },
            { text: `Prescribed by: Dr. ${doctorName}`, style: 'details' },
            { text: `Doctor Email: ${doctorEmail}`, style: 'details' },
            { text: 'Patient Details', style: 'sectionHeader' },
            {
                columns: [
                    { text: `Name: ${patientName}`, style: 'details' },
                    { text: `Age: ${age} | Sex: ${sex}`, style: 'details' }
                ]
            },
            { text: `Patient Contact: ${patientNumber}`, style: 'details' },
            { text: `Patient Email: ${patientEmail}`, style: 'details' },
            { text: 'Prescription', style: 'sectionHeader' },
            { text: description, style: 'prescriptionText' },
            {
                layout: 'lightHorizontalLines',
                table: {
                    body: [
                        
                        [{ text: 'Disclaimer: This prescription is for informational purposes only. Consult a healthcare professional for medical advice.', style: 'disclaimer' }],
                    ]
                }
            },
        ],
        styles: {
            hospitalName: {
                fontSize: 28,
                bold: true,
                margin: [0, 0, 0, 10],
                alignment: 'center',
                color: '#3498db' // Blue color
            },
            hospitalInfo: {
                fontSize: 16,
                margin: [0, 5, 0, 5],
                alignment: 'center',
                color: '#333333'
            },
            header: {
                fontSize: 26,
                bold: true,
                margin: [0, 20, 0, 10],
                alignment: 'center',
                color: '#3498db' // Blue color
            },
            subheader: {
                fontSize: 20,
                bold: true,
                margin: [0, 0, 0, 20],
                alignment: 'center'
            },
            sectionHeader: {
                bold: true,
                fontSize: 18,
                margin: [0, 20, 0, 5],
                color: '#3498db' // Blue color
            },
            details: {
                margin: [0, 2],
                color: '#333333'
            },
            prescriptionText: {
                margin: [0, 5, 0, 15],
                color: '#555555'
            },
            signature: {
                bold: true,
                margin: [0, 20, 0, 5],
                alignment: 'left',
                italics: true,
                color: '#3498db' // Blue color
            },
            signatureLine: {
                margin: [0, 2, 0, 10],
                alignment: 'left'
            },
            doctorInfo: {
                margin: [0, 5],
                fontSize: 12,
                color: '#555555'
            },
            disclaimer: {
                margin: [0, 30, 0, 15],
                fontSize: 10,
                italics: true,
                color: '#888888'
            }
        },
        defaultStyle: {
            columnGap: 20
        }
    };

    pdfMake.createPdf(docDefinition).download(`Prescription-${patientName}.pdf`);
};

const getStyles = () => ({
    hospitalName: {
        fontSize: 24,
        bold: true,
        margin: [0, 0, 0, 10],
        alignment: 'center',
        color: '#007bff'
    },
    hospitalInfo: {
        fontSize: 14,
        margin: [0, 5, 0, 15],
        alignment: 'center'
    },
    header: {
        fontSize: 22,
        bold: true,
        margin: [0, 20, 0, 10],
        alignment: 'center',
        color: '#333333'
    },
    table: {
        margin: [0, 5, 0, 15],
        border: 1,
        layout: 'lightHorizontalLines'
    },
    footer: {
        fontSize: 12,
        margin: [0, 10, 0, 0],
        alignment: 'center',
        color: '#888888'
    }
});

const createHospitalHeader = () => ({
    stack: [
        { text: 'MediWave Hospital', style: 'hospitalName' },
        { text: '15 Rankin Street, Wari, Dhaka 1203', style: 'hospitalInfo' },
        { text: 'Email: mediwave@hospital.bd', style: 'hospitalInfo' }
    ],
    margin: [0, 0, 0, 20]
});

const createBillTable = (billDetails) => ({
    style: 'table',
    table: {
        widths: ['auto', '*'],
        body: [
            ['Ward/Cabin No:', `${billDetails.ward_no || billDetails.cabin_no}`],
            ['Floor No:', `${billDetails.floor_no}`],
            ['Total Days:', `${billDetails.total_days}`],
            ['Total Bill:', `${billDetails.total_bill} Taka`],
            ['Name:', `${billDetails.booked_by}`],   // Added: Name
            ['Email:', `${billDetails.email}`],      // Added: Email
            ['Booked Date:', `${billDetails.booked_date}`],  // Added: Booked Date
        ]
    }
});

const createFooter = () => ({
    text: 'Thank you for choosing MediWave Hospital!',
    style: 'footer'
});

export const downloadSingleWardBillPDF = (wardBill) => {
    const docDefinition = {
        content: [
            createHospitalHeader(),
            { text: 'Ward Bill Detail', style: 'header' },
            createBillTable(wardBill),
            createFooter()
        ],
        styles: getStyles()
    };

    pdfMake.createPdf(docDefinition).download(`ward-bill-${wardBill.ward_no}.pdf`);
};

export const downloadSingleCabinBillPDF = (cabinBill) => {
    const docDefinition = {
        content: [
            createHospitalHeader(),
            { text: 'Cabin Bill Detail', style: 'header' },
            createBillTable(cabinBill),
            createFooter()
        ],
        styles: getStyles()
    };

    pdfMake.createPdf(docDefinition).download(`cabin-bill-${cabinBill.cabin_no}.pdf`);
};


// Import statements...

export const downloadSingleTestBillPDF = (testBill) => {
    const docDefinition = {
        content: [
            createHospitalHeader(),
            { text: 'Test Bill Detail', style: 'header' },
            createTestBillTable(testBill),
            createFooter()
        ],
        styles: getStyles()
    };

    pdfMake.createPdf(docDefinition).download(`test-bill-${testBill.patient_name}.pdf`);
};

const createTestBillTable = (testBill) => ({
    style: 'table',
    table: {
        widths: ['auto', '*'],
        body: [
            ['Doctor Name:', `${testBill.doctor_name}`],
            ['Doctor Email:', `${testBill.doctor_email}`],
            ['Patient Name:', `${testBill.patient_name}`],
            ['Patient Email:', `${testBill.patient_email}`],
            ['Test Name:', `${Array.isArray(testBill.test_name) ? testBill.test_name.join(', ') : testBill.test_name}`],
            ['Total Bill:', `BDT ${testBill.total_bill}`],
            // Add other fields as needed
        ]
    }
});

// Other functions...
