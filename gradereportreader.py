import PyPDF2
import pandas as pd
import re

import utils

class GradeReportReader:
    """
    Reads ITA's grade report in pdf format.
    """
    def __init__(self, file) -> None:
        self.pdf = PyPDF2.PdfReader(file)
        self.report_lines = self.pdf.pages[0].extract_text().splitlines()
        self.prof = ''
        self.grades = self.read_grades()
    
    def read_grades(self):
        """
        Reads the grades of each course in the pdf.
        """
        semesters = []
        courses = []
        grades = []
        passed_summary = False
        passed_name = False
        next_is_grades = False
        for i in range(len(self.report_lines)):
            if not passed_summary:
                if not passed_name and '-' in self.report_lines[i]:
                    string = self.report_lines[i]
                    self.name = string.split(',')[0].split('-')[1][1:]
                    passed_name = True
                elif 'Engenharia' in self.report_lines[i]:
                    string = self.report_lines[i]
                    self.prof = re.split('(\d+)', string)[0][:-1]
                if self.report_lines[i] == "RESUMO DO HISTÓRICO ESCOLAR - ":
                    passed_summary = True
            elif not next_is_grades:
                next_is_grades = True
                continue
            elif self.report_lines[i] == "M1 -> Média dos Bimestres":
                break
            elif self.report_lines[i]:
                    courses_info = self.report_lines[i].split()
                    for semester, course, grade in zip(courses_info[0::3], courses_info[1::3],
                                                       courses_info[2::3]):
                        try:
                            grades.append(utils.str_number_to_float(grade))
                            semesters.append(utils.get_semester(semester))
                            courses.append(course)
                        except:
                            continue
        return pd.DataFrame({"semester": semesters, "courses": courses, "grade": grades})
    
    def get_grades(self):
        """
        Getter for the grades
        """
        return self.grades

    def get_prof(self):
        """
        Getter for professional course
        """
        return self.prof