-- approach: pair every student with every exam
-- count exam attendances for each pair
-- handle pairs with no exam attendances with LEFT JOIN to ensure no exam attendances included in results.
-- cross join bc want to match all students with all subjects, even if they havent taken exams
-- vs full join that needs on statement, it wouldnt work here

-- Time complexity: O(S×N+E)O(S \times N + E)O(S×N+E), where SSS is the number of subjects, NNN is the number of students, and EEE is the number of entries in the Examinations table. The cross join creates S×NS \times NS×N pairs, and the left join with the examinations table introduces a dependency on the number of examination entries.
--  Space complexity: O(S×N)O(S \times N)O(S×N), considering the space required to store the result set of all possible student-subject pairs before counting the exams. This is because, in the worst case, the output will include an entry for every possible combination of students and subjects, even if no exams were attended.


SELECT st.student_id, st.student_name, su.subject_name, COUNT(e.subject_name) AS attended_exams
FROM Students st
CROSS JOIN Subjects su
LEFT JOIN Examinations e
ON st.student_id = e.student_id AND e.subject_name = su.subject_name
GROUP BY st.student_id, st.student_name, su.subject_name
ORDER BY st.student_id, su.subject_name;