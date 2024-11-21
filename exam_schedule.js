const examData = [
    // CDCS230
    // Sem 1
    {code: "CDCS230", courseName: "Programming I (CSC402)", date: "2024-07-16", time: "9:00 AM - 12:00 PM", semester: "1" },
    {code: "CDCS230", courseName: "Computer Organization and Architecture (CSC429)", date: "2024-07-20", time: "9:00 AM - 12:00 PM", semester: "1" },
    {code: "CDCS230", courseName: "Database Design and Development (ICT450)", date: "2024-08-01", time: "2:15 PM - 5:15 PM", semester: "1" },
    {code: "CDCS230", courseName: "Foundation Mathematics (MAT406)", date: "2024-07-28", time: "9:00 AM - 12:00 PM", semester: "1" },

    // Sem 2
    {code: "CDCS230", courseName: "Programming II (CSC404)", date: "2024-07-26", time: "8:30 AM - 11:30 AM", semester: "2" },
    {code: "CDCS230", courseName: "Database Engineering (ICT502)", date: "2024-07-17", time: "9:00 AM - 12:00 PM", semester: "2" },
    {code: "CDCS230", courseName: "Calculus I (MAT421)", date: "2024-07-31", time: "9:00 AM - 12:00 PM", semester: "2" },
    {code: "CDCS230", courseName: "Applied Probability and Statistics (STA416)", date: "2024-07-23", time: "9:00 AM - 11:00 AM", semester: "2" },

    // Sem 3
    {code: "CDCS230", courseName: "Object-Oriented Programming (CSC435)", date: "2024-07-15", time: "9:00 AM - 12:00 PM", semester: "3" },
    {code: "CDCS230", courseName: "Discrete Structures (CSC510)", date: "2024-07-25", time: "2:15 PM - 5:15 PM", semester: "3" },
    {code: "CDCS230", courseName: "Artificial Intelligence Algorithm (CSC583)", date: "2024-07-20", time: "9:00 AM - 12:00 PM", semester: "3" },
    {code: "CDCS230", courseName: "Linear Algebra I (MAT423)", date: "2024-07-27", time: "2:15 PM - 5:15 PM", semester: "3" },

    // Sem 4
    // Empty

    // Sem 5
    {code: "CDCS230", courseName: "Algorithm Analysis and Design (CSC645)", date: "2024-07-26", time: "2:45 PM - 5:45 PM", semester: "5" },
    {code: "CDCS230", courseName: "Statistics for Business and Social Science (STA404)", date: "2024-07-21", time: "9:00 AM - 11:00 AM", semester: "5" },

    // Sem 6
    {code: "CDCS230", courseName: "Computer Security (CSC662)", date: "2024-07-29", time: "2:15 PM - 5:15 PM", semester: "6" },
    {code: "CDCS230", courseName: "English Exit Test (EET699)", date: "2024-07-15", time: "2:15 PM - 3:45 PM", semester: "6" },

    // CDCS242
    // Sem 1
    {code: "CDCS242", courseName: "Principles of Risk Management, Insurance and Takaful (ASC400)", date: "2024-08-01", time: "9:00 AM - 12:00 PM", semester: "1"},
    {code: "CDCS242", courseName: "Linear Algebra I (MAT423)", date: "2024-07-27", time: "2:15 PM - 5:15 PM", semester: "1"},
    {code: "CDCS242", courseName: "Calculus II (MAT441)", date: "2024-07-17", time: "2:15 PM - 5:15 PM", semester: "1"},

    // Sem 2
    {code: "CDCS242", courseName: "Financial Mathematics (ASC453)", date: "2024-07-25", time: "2:15 PM - 5:15 PM", semester: "2"},
    {code: "CDCS242", courseName: "Microeconomics (ECO410)", date: "2024-07-21", time: "2:15 PM - 5:15 PM", semester: "2"},
    {code: "CDCS242", courseName: "Calculus III (MAT491)", date: "2024-07-18", time: "9:00 AM - 12:00 PM", semester: "2"},
    {code: "CDCS242", courseName: "Mathematical Statistics II (STA568)", date: "2024-07-27", time: "2:15 PM - 5:15 PM", semester: "2"},

    // Sem 3
    {code: "CDCS242", courseName: "Actuarial Mathematics I (ASC425)", date: "2024-07-31", time: "2:15 PM - 5:15 PM", semester: "3"},
    {code: "CDCS242", courseName: "Advanced Financial Mathematics (ASC553)", date: "2024-07-25", time: "9:00 AM - 12:00 PM", semester: "3"},
    {code: "CDCS242", courseName: "Corporate Finance (ASC560)", date: "2024-07-28", time: "9:00 AM - 12:00 PM", semester: "3"},
    {code: "CDCS242", courseName: "Intermediate Macroeconomics (ECO557)", date: "2024-07-16", time: "9:00 AM - 12:00 PM", semester: "3"},

    // Sem 4
    {code: "CDCS242", courseName: "Risk Modeling (ASC456)", date: "2024-07-23", time: "2:15 PM - 5:15 PM", semester: "4"},
    {code: "CDCS242", courseName: "Actuarial Mathematics II (ASC475)", date: "2024-07-19", time: "8:30 AM - 11:30 AM", semester: "4"},
    {code: "CDCS242", courseName: "Machine Learning (ISP560)", date: "2024-07-28", time: "2:15 PM - 5:15 PM", semester: "4"},

    // Sem 5
    {code: "CDCS242", courseName: "Stochastic Modeling for Actuarial Applications (ASC486)", date: "2024-07-26", time: "2:45 PM - 5:45 PM", semester: "5"},
    {code: "CDCS242", courseName: "Survival Models (ASC550)", date: "2024-08-01", time: "9:00 AM - 12:00 PM", semester: "5"},
    {code: "CDCS242", courseName: "Portfolio and Investment Analysis (ASC587)", date: "2024-07-23", time: "9:00 AM - 12:00 PM", semester: "5"},

    // Sem 6
    {code: "CDCS242", courseName: "Financial Risk Management (ASC637)", date: "2024-07-17", time: "9:00 AM - 12:00 PM", semester: "6"},
    {code: "CDCS242", courseName: "Actuarial Practice for Non-Life Insurance (ASC657)", date: "2024-07-20", time: "9:00 AM - 12:00 PM", semester: "6"},
    {code: "CDCS242", courseName: "English Exit Test (EET699)", date: "2024-07-15", time: "2:15 PM - 3:45 PM", semester: "6"},

    // CDCS249
    // Sem 1
    { code: "CDCS249", courseName: "Calculus I (MAT421)", date: "2024-07-31", time: "9:00 AM - 12:00 PM", semester: "1" },
    { code: "CDCS249", courseName: "Linear Algebra I (MAT423)", date: "2024-07-27", time: "2:15 PM - 5:15 PM", semester: "1" },
    { code: "CDCS249", courseName: "Discrete Mathematics (MAT425)", date: "2024-07-21", time: "2:15 PM - 5:15 PM", semester: "1" },

    // Sem 2
    { code: "CDCS249", courseName: "Calculus II (MAT441)", date: "2024-07-17", time: "2:15 PM - 5:15 PM", semester: "2" },
    { code: "CDCS249", courseName: "Probability and Statistics (STA456)", date: "2024-07-23", time: "9:00 AM - 12:00 PM", semester: "2" },
    { code: "CDCS249", courseName: "Numerical Methods (MAT458)", date: "2024-07-25", time: "2:15 PM - 5:15 PM", semester: "2" },

    // Sem 3
    { code: "CDCS249", courseName: "Advanced Calculus (MAT511)", date: "2024-07-16", time: "9:00 AM - 12:00 PM", semester: "3" },
    { code: "CDCS249", courseName: "Complex Variables (MAT513)", date: "2024-07-20", time: "9:00 AM - 12:00 PM", semester: "3" },
    { code: "CDCS249", courseName: "Linear Programming (MAT517)", date: "2024-07-27", time: "2:15 PM - 5:15 PM", semester: "3" },

    // Sem 4
    { code: "CDCS249", courseName: "Differential Equations (MAT521)", date: "2024-07-29", time: "9:00 AM - 12:00 PM", semester: "4" },
    { code: "CDCS249", courseName: "Graph Theory (MAT525)", date: "2024-08-01", time: "2:15 PM - 5:15 PM", semester: "4" },
    { code: "CDCS249", courseName: "Abstract Algebra (MAT531)", date: "2024-07-28", time: "9:00 AM - 12:00 PM", semester: "4" },

    // Sem 5
    { code: "CDCS249", courseName: "Partial Differential Equations (MAT541)", date: "2024-07-26", time: "2:15 PM - 5:15 PM", semester: "5" },
    { code: "CDCS249", courseName: "Mathematical Modeling (MAT555)", date: "2024-07-23", time: "2:15 PM - 5:15 PM", semester: "5" },
    { code: "CDCS249", courseName: "Topology (MAT567)", date: "2024-07-25", time: "9:00 AM - 12:00 PM", semester: "5" },

    // Sem 6
    { code: "CDCS249", courseName: "Functional Analysis (MAT611)", date: "2024-07-15", time: "9:00 AM - 12:00 PM", semester: "6" },
    { code: "CDCS249", courseName: "Measure Theory (MAT615)", date: "2024-07-18", time: "2:15 PM - 5:15 PM", semester: "6" },
    { code: "CDCS249", courseName: "English Exit Test (EET699)", date: "2024-07-15", time: "2:15 PM - 3:45 PM", semester: "6" }
];


function getExamSchedule() {
    const programCode = document.getElementById("program-code").value.toUpperCase();
    
    // Check if program code is empty
    if (!programCode) {
        alert("Please Enter Program Code");
        return;
    }

    const semester = document.getElementById("semester").value;
    const scheduleContainer = document.getElementById("exam-schedule");

    const filteredExams = examData.filter(exam =>
        exam.code.includes(programCode) && exam.semester === semester
    );

    scheduleContainer.innerHTML = "";
    if (filteredExams.length > 0) {
        filteredExams.forEach(exam => {
            const examElement = document.createElement("div");
            examElement.innerHTML = `<strong>Course:</strong> ${exam.courseName} <br> 
                                   <strong>Date:</strong> ${exam.date} <br> 
                                   <strong>Time:</strong> ${exam.time} <hr>`;
            scheduleContainer.appendChild(examElement);
        });
    } else {
        scheduleContainer.innerHTML = "<p>No exams found for this program and semester.</p>";
    }
}

function generatePDF() {
    const programCode = document.getElementById("program-code").value.toUpperCase();
    
    // Check if program code is empty
    if (!programCode) {
        alert("Please Enter Program Code");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const headerColor = document.getElementById("header-color").value;
    const cellColor = document.getElementById("cell-color").value;
    const textColor = document.getElementById("text-color").value;

    const semester = document.getElementById("semester").value;
    const filteredExams = examData.filter(exam =>
        exam.code.includes(programCode) && exam.semester === semester
    ).sort((a, b) => new Date(a.date) - new Date(b.date));  // Sort by date

    // Page setup
    doc.setFontSize(16);
    doc.text("Exam Schedule Timetable", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text(`Program: ${programCode} - Semester: ${semester}`, 105, 30, { align: "center" });

    // Table settings
    const startY = 40;
    const columnWidths = [25, 85, 30, 30, 20];  // Date, Course, Start, End, Duration
    const rowHeight = 15;  // Increased row height to accommodate wrapped text
    let currentY = startY;

    // Draw header
    doc.setFillColor(headerColor);
    doc.setTextColor(255, 255, 255);
    doc.rect(10, currentY, sum(columnWidths), rowHeight, 'F');
    
    let currentX = 10;
    const headers = ["Date", "Course", "Start", "End", "Duration"];
    headers.forEach((header, i) => {
        doc.text(header, currentX + 2, currentY + 8);
        currentX += columnWidths[i];
    });
    currentY += rowHeight;

    // Draw rows
    filteredExams.forEach((exam, index) => {
        const isEvenRow = index % 2 === 0;
        
        // Calculate wrapped text height
        const courseLines = doc.splitTextToSize(exam.courseName, columnWidths[1] - 4);
        const lineHeight = 5;
        const textHeight = courseLines.length * lineHeight;
        const actualRowHeight = Math.max(rowHeight, textHeight + 4); // Add padding
        
        // Set background color
        doc.setFillColor(isEvenRow ? cellColor : '#f5f5f5');
        doc.rect(10, currentY, sum(columnWidths), actualRowHeight, 'F');
        
        // Set text color
        doc.setTextColor(textColor);
        
        // Format date
        const examDate = new Date(exam.date);
        const formattedDate = examDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        // Split time into start and end
        const [startTime, endTime] = exam.time.split(' - ');

        // Draw cell contents
        currentX = 10;
        // Date
        doc.text(formattedDate, currentX + 2, currentY + 8);
        currentX += columnWidths[0];
        
        // Course name with word wrap
        doc.text(courseLines, currentX + 2, currentY + 8);
        currentX += columnWidths[1];
        
        // Start Time
        doc.text(startTime, currentX + 2, currentY + 8);
        currentX += columnWidths[2];
        
        // End Time
        doc.text(endTime, currentX + 2, currentY + 8);
        currentX += columnWidths[3];
        
        // Duration
        doc.text(calculateDuration(startTime, endTime), currentX + 2, currentY + 8);
        
        currentY += actualRowHeight;

        // Add new page if needed
        if (currentY > 280) {
            doc.addPage();
            currentY = 20;
        }
    });

    doc.save("Exam_Schedule_Timetable.pdf");
}

// Helper function to sum array values
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

// Helper function to calculate duration
function calculateDuration(startTime, endTime) {
    // Standardize the time format
    startTime = startTime.replace('.', ':').toUpperCase();
    endTime = endTime.replace('.', ':').toUpperCase();

    // Parse the times
    let [startHour, startMinute, startPeriod] = startTime.match(/(\d+):(\d+)\s*(AM|PM)/).slice(1);
    let [endHour, endMinute, endPeriod] = endTime.match(/(\d+):(\d+)\s*(AM|PM)/).slice(1);

    // Convert to 24-hour format
    startHour = parseInt(startHour);
    endHour = parseInt(endHour);
    startMinute = parseInt(startMinute);
    endMinute = parseInt(endMinute);

    // Adjust hours for PM
    if (startPeriod === 'PM' && startHour !== 12) startHour += 12;
    if (endPeriod === 'PM' && endHour !== 12) endHour += 12;
    // Adjust hours for AM
    if (startPeriod === 'AM' && startHour === 12) startHour = 0;
    if (endPeriod === 'AM' && endHour === 12) endHour = 0;

    // Calculate duration in minutes
    let durationMinutes = (endHour * 60 + endMinute) - (startHour * 60 + startMinute);

    // Format the duration
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;
    return `${hours}h ${minutes}m`;
}

// Add sidebar functionality
function toggleSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    const overlay = document.querySelector('.sidebar-overlay');
    
    // Close any open sidebars first
    document.querySelectorAll('.sidebar.active').forEach(openSidebar => {
        if (openSidebar.id !== sidebarId) {
            openSidebar.classList.remove('active');
        }
    });
    
    sidebar.classList.toggle('active');
    
    // Create and toggle overlay
    if (!overlay) {
        const newOverlay = document.createElement('div');
        newOverlay.className = 'sidebar-overlay';
        document.body.appendChild(newOverlay);
        newOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            newOverlay.classList.remove('active');
        });
    }
    
    const currentOverlay = document.querySelector('.sidebar-overlay');
    if (sidebar.classList.contains('active')) {
        currentOverlay.classList.add('active');
    } else {
        currentOverlay.classList.remove('active');
    }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sidebar') && !e.target.closest('.sidebar-button')) {
            document.querySelectorAll('.sidebar').forEach(sidebar => {
                sidebar.classList.remove('active');
            });
            const overlay = document.querySelector('.sidebar-overlay');
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
    });

    // Initialize color previews
    const colorInputs = ['header-color', 'cell-color', 'text-color'];
    colorInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', () => {
                const preview = document.getElementById(`${inputId}-preview`);
                if (preview) {
                    preview.style.backgroundColor = input.value;
                }
            });
            // Initialize preview
            const preview = document.getElementById(`${inputId}-preview`);
            if (preview) {
                preview.style.backgroundColor = input.value;
            }
        }
    });
});


