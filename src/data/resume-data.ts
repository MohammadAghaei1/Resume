import { ResumeData } from '../interfaces/resumeData';

export const resumeData: ResumeData = {
	about: {
		firstname: "Mohammad",
		lastname: "Aghaei Molasaraei",
		jobTitle: "Data scientist and AI specialist",
		description: "With a strong foundation in statistics and machine learning, I develop data-driven solutions that transform raw information into actionable insights. My focus is on applying analytical techniques and predictive models to solve real-world challenges and support smarter decision-making.",
		image: "/assets/images/about/about.jpg",
		socialLinks: [
			{
				icon: "location",
				value: "Italy, Naples"
			},
			{
				icon: "phone",
				value: "+39 3336733900",
				link: "tel: +39 3336733900"
			},
			{
				icon: "mail",
				value: "mohammadaghaei103@gmail.com",
				link: "mailto: mohammadaghaei103@gmail.com"
			},
			{
				icon: "linkedin",
				value: "mohammad-aghaei-molasaraei-b37036311",
				link: "https://www.linkedin.com/in/mohammad-aghaei-molasaraei-b37036311/"
			},
			{
				icon: "github",
				value: "GitHub: MohammadAghaei1",
				link: "https://github.com/MohammadAghaei1"
			}
		]
	},
	projects: {
		items: [
			{
				title: "Plantdoc image processing",
				description: "Detecte and classify plant disease",
				role: "Computer vision developer",
				link: "https://github.com/MohammadAghaei1/Plantdoc-image-processing",
				bulletPoints: [
					"Developed an object detection model for identifying plant diseases using the YOLOv12 architecture.",
					"Collected and labeled a dataset of plant leaf images for model training and evaluation.",
					"Trained and fine-tuned YOLOv12 to detect multiple types of leaf diseases with high accuracy.",
					"Built an interface to upload plant images and display real-time detection results with bounding boxes.",
					"Evaluated model performance using metrics such as mAP (mean Average Precision) and inference speed."
				],
				skills: [
					{
						title: "Core Technologies",
						items: ["Python", "TensorFlow", "OpenCV", "Jupyter Notebooks"]
					},
					{
						title: "Techniques",
						items: ["Deep Learning", "Computer Vision", "CNNs", "YOLOv12", "Object detection", "Data Augmentation", "T-SNE", "Data Mining"]
					}
				]
			},
			{
				title: "Acea smart water analytics",
				description: "Forcasting water level",
				role: "Data scientist",
				link: "https://github.com/MohammadAghaei1/Acea-Smart-Water-Analytics",
				bulletPoints: [
					"Collected and preprocessed historical water level and weather data from multiple sources.",
  					"Applied statistical and machine learning techniques to forecast future water levels.",
				    "Trained and optimized predictive models using time series methods such as SARIMA and ARIMA.",
  					"Visualized results and trends to support smart water management and decision-making.",
  					"Evaluated model accuracy using metrics such as RMSE and MAE to ensure reliable predictions."
				],
				skills: [
					{
						title: "Data Analysis",
						items: ["Python", "Machine learning", "Data preprocessing", "Time series forecasting", "SARIMA & ARIMA models", "Pandas & NumPy", "Matplotlib & Seaborn"]
					}
				]
			},
			{
				title: "Polynomial car price prediction",
				description: "Predicting car price",
				role: "Data Scientist",
				link: "https://github.com/MohammadAghaei1/Polynomial-Car-price-prediction-",
				bulletPoints: [
					"Collected and cleaned car sales data including features such as brand, mileage, year, and engine size.",
  					"Performed exploratory data analysis (EDA) to identify key factors affecting car prices.",
  					"Implemented and trained polynomial regression models to predict car prices with improved accuracy.",
  					"Compared model performance with other algorithms such as linear regression and decision trees and XG boost.",
  					"Visualized predicted vs. actual car prices using Matplotlib and Seaborn for performance evaluation."
				],
				skills: [
					{
						title: "Core Technologies",
						items: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebooks"]
					},
					{
						title: "Techniques",
						items: ["Machine Learning", "Statistical Learning", "Data visualization", "Data Preprocessing", "Hyperparameter tuning", "EDA", "Correlation analysis", "Cross-Validation", "Hyperparameter Tuning", "Model Evaluation"]
					}
				]
			},
			{
				title: "Italian medicines agency AIFA",
				description: "Collecting and analyzing pharmaceutical data from the AIFA official database",
				role: "Data Engineer",
				link: "https://github.com/MohammadAghaei1/Italian-Medicines-Agency-AIFA-",
				bulletPoints: [
					"Downloaded and merged official medicine lists (Class A and Class H) from the AIFA portal.",
    				"Cleaned and standardized the dataset by removing duplicates and incomplete entries.",
    				"Automated data extraction from AIFA’s public database using Python-based web scraping tools.",
    				"Extracted clinical and regulatory information such as therapeutic indications, contraindications, and side effects.",
    				"Built a relational database structure and normalized the dataset for efficient querying.",
    				"Created interactive Power BI dashboards to visualize drug distributions, side effect frequencies, and ATC classifications.",
    				"Executed analytical SQL queries to extract insights, such as most frequent therapeutic indications and contraindications."
				],
				skills: [
					{
						title: "Core Technologies",
						items: ["Python", "SQL", "Pandas", "NumPy", "Jupyter Notebooks","Power BI"]
					},
					{
						title: "Techniques",
						items: ["Web scraping (Selenium)", "Data cleaning and preprocessing", "SQL and database normalization", "Data Preprocessing", "Power BI dashboard design"]
					}
				]
			}
		]
	},
	works: {
		items: [
			{
				title: "Mobile Phone and laptop Repairs",
				description: "Specialized repairs of mobile and laptop boards",
				date: {
					start: "January 2017",
					finish: "february 2019"
				},
				location: "Rasht",
				type: "On site",
				jobTitle: "Electronics Repair Technician",
				icon: "/assets/images/works/repair.jpg",
				link: "https://mftgilan.com/",
				bulletPoints: [
					"Diagnosed and repaired hardware issues in mobile phones and laptop motherboards.",
					"Performed board-level troubleshooting using multimeters, oscilloscopes, and soldering tools.",
					"Replaced faulty components such as ICs, capacitors, resistors, and charging ports.",
					"Recovered and restored devices affected by water damage and power-related faults.",
					"Maintained detailed repair reports and ensured consistent quality control.",
					"Provided customer support and technical advice regarding device maintenance and data safety."
				],
				skills: [
					{
						title: "Electronics Repair",
						items: ["Motherboard Troubleshooting", "Soldering and Desoldering", "Multimeter and Oscilloscope Usage", "Mobile Phone Repair", "Technical Documentation", "Laptop Hardware Maintenance"]
					}
				]
			},
			{
				title: "Specialized Board Repair",
				description: "Repairing indsutrial boards in Engineer Office Jahan",
				date: {
					start: "June 2021",
					finish: "April 2023"
				},
				location: "Rasht",
				type: "On site",
				jobTitle: "Electronics Repair Technician",
				icon: "/assets/images/works/jahan.jpg",
				link: "http://jahanelecoffice.ir/",
				bulletPoints: [
					"Diagnosed and repaired industrial control and power boards with complex circuit faults.",
					"Performed board-level troubleshooting using multimeters, oscilloscopes, and logic analyzers.",
					"Replaced and re-soldered surface-mount and through-hole components such as ICs, capacitors, and resistors.",
					"Restored malfunctioning boards by identifying short circuits and damaged traces.",
					"Collaborated with senior engineers to improve fault detection accuracy and repair time efficiency."
				],
				skills: [
					{
						title: "Board Repairs",
						items: ["Power electronics", "Electronic schematic reading", "PCB diagnostics", "Soldering and desoldering"]
					}
				]
			}
		]
	},
	skills: [
		{
			title: "Data Science & Machine Learning",
			items: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "Data Visualization", "Jupyter Notebooks", "Statistical Learning", "Statistical Analysis", "Neural Networks", "CNNs", "Classification", "Model Optimization", "Feature Engineering", "Data Preprocessing", "Data Mining", "Large Language Models", "EDA", "SMOTE", "Cross-Validation", "Hyperparameter Tuning", "Model Evaluation"]
		},
		{
			title: "Software Development",
			items: ["Git", "GitHub", "Power BI", "My SQL", "MySQL", "Core ML", "Create ML"]
		},
		{
			title: "Methodologies & Tools",
			items: ["Agile", "Scrum", "Jira", "Product Thinking", "Code Quality", "Mentoring"]
		},
		{
			title: "Soft Skills",
			items: ["Communication", "Teamwork", "Problem Solving", "Critical Thinking", "Mentoring", "Leadership", "Adaptability", "Time Management", "Attention to Detail", "Creativity", "Organization", "Research"]
		}
	],
	education: {
		items: [
			{
				name: "Università degli Studi di Napoli Federico II",
				grade: "Master's Degree",
				science: "Data Science",
				icon: "/assets/images/education/University_of_federico_II.jpg",
				date: {
					start: "2024",
					finish: "Present"
				}
			},
			{
				name: "University of Guilan",
				type: "University",
				grade: "Bachelor's Degree",
				science: "Computer science",
				icon: "/assets/images/education/University_of_Guilan.png",
				date: {
					start: "2018",
					finish: "2022"
				}
			}
		]
	}
};
