import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Html from 'react-pdf-html';
import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  column: {
    flex: 1,
    padding: 55,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    maxWidth: 800,
    minHeight: 700,
  },
  row: {
    marginVertical: 10,
  },
  nameSection: {
    textAlign: 'center',
    padding: 0,
  },
  paragraph: {
    fontStyle: 'italic',
  },
  itemLocation: {
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },
  descrName: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
    textTransform: 'capitalize',
    fontSize: 10,
  },
  cvName: {
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  profileLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    listStyle: 'none',
    fontSize: 10,
    textTransform: 'capitalize',
  },
  linkItem: {
    marginHorizontal: 5,
  },
  sectionTitle: {
    borderBottom: '1px solid #000',
    fontSize: 11,
  },
  sectionDescr: {
    paddingTop: 5,
    fontStyle: 'italic',
    fontSize: 10,
  },
  header: {
    marginBottom: 0,
    fontSize: 10,
  },
});

const CVPaper = (props) => {
  const { fullName, email, phone, location, others } = props.resumeInfo.profile;
  const { summary, education, experience, projects, skills } = props.resumeInfo;
  const summ =
    DOMPurify.sanitize(summary) || 'x+ years as [Title] with y small/medium/large companies in the [Industry]'; // Summary sanitized or default value

  return (
    <Document>
      <Page style={styles.column}>
        <View style={[styles.row, styles.nameSection]}>
          <Text style={styles.cvName}>{fullName || 'Name'}</Text>
        </View>

        <View>
          <View style={styles.profileLinks}>
            <Text style={styles.linkItem}>{email || 'Email Address'}</Text>
            <Text style={styles.linkItem}>{phone || 'Phone Number'}</Text>
            <Text style={styles.linkItem}>{location || 'Location'}</Text>
            {Object.entries(others).map(([key, value]) =>
              value !== '' ? (
                <Link key={key} style={styles.linkItem} src={value}>
                  {key}
                </Link>
              ) : null
            )}
          </View>
        </View>

        <View style={[styles.row, styles.cvSummarySection]}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Html style={styles.sectionDescr}>{summ}</Html>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.sectionDescr}>
            {Object.entries(education).map(([key, education]) => {
              const location = (education.edu_city || 'City') + ', ' + (education.edu_country || 'State');
              const date = (education.schl_start_date || 'MM/YEAR') + ' - ' + (education?.schl_end_date || 'MM/YEAR');

              return (
                <View style={styles.item} key={key}>
                  <View style={styles.descrName}>
                    <Text style={styles.header}>{education.school || 'School / Bootcamp / Program'}</Text>
                    <Text style={[styles.paragraph, styles.itemLocation]}>{location}</Text>
                  </View>
                  <View style={styles.descrName}>
                    <Text>{education.degree || 'Degree Name'}</Text>
                    <Text style={styles.paragraph}>{date}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          <View style={styles.sectionDescr}>
            {experience.map((experienceItem, index) => {
              const location = (experienceItem.exp_city || 'City') + ', ' + (experienceItem.exp_country || 'State');
              const date =
                (experienceItem.exp_start_date || 'MM/YEAR') + ' - ' + (experienceItem.exp_end_date || 'MM/YEAR');
              const responsibilities =
                experienceItem.exp_responsibilities ||
                '<ul><li>For example: Part of a 7 person team delivering a product serving 1,500 users, releasing updates every 2 weeks, on a codebase with more than 150,000 lines of code, 100 classes, 15 tables.</ul>';

              return (
                <View style={styles.item} key={index}>
                  <View style={styles.descrName}>
                    <Text style={styles.header}>{experienceItem.exp_company || 'Company'}</Text>
                    <Text style={[styles.paragraph, styles.itemLocation]}>{location}</Text>
                  </View>
                  <View style={styles.descrName}>
                    <Text>{experienceItem.exp_job || 'Position Held'}</Text>
                    <Text style={styles.paragraph}>{date}</Text>
                  </View>
                  <View>
                    <Html style={styles.sectionDescr}>{responsibilities}</Html>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.sectionDescr}>
            {projects.map((project, index) => {
              const date = (project.exp_start_date || 'MM/YEAR') + ' - ' + (project.exp_end_date || 'MM/YEAR');
              const work =
                project?.project_works ||
                '<ul><li>Cover your project, team/ solo work, quantify and call out notable things like size of projects, number of users, etc.</li></ul>'; // Summary sanitized or default value

              return (
                <View style={styles.item} key={index}>
                  <View style={styles.descrName}>
                    <Text style={styles.header} onPress={() => Linking.openURL(project.project_link || '')}>
                      {project.project_title || 'Project Name'}
                    </Text>
                    <Text style={styles.paragraph}>{date}</Text>
                  </View>
                  <View style={styles.descrName}>
                    <Text>{project.project_type || 'Project Type'}</Text>
                  </View>
                  <View>
                    <Html style={styles.sectionDescr}>{work}</Html>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Skills & Interests</Text>
          <View style={styles.sectionDescr}>
            <View style={styles.item}>
              <View style={styles.moreInfo}>
                <View style={styles.list}>
                  {skills.map((skill, index) => (
                    <View style={styles.item} key={index}>
                      <Text>
                        <Text style={styles.skillCategory}>{skill.skill_category || 'Skill'}: </Text>
                        {skill.technologies.join(', ') || 'Note things related to your role'}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

CVPaper.propTypes = {
  resumeInfo: PropTypes.object.isRequired,
};

export default CVPaper;
