import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import "./tags.scss"

const Tag = ({ tag, tags, index }) => (
  <>
    <li className="tag-li">
      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
    </li>

    {tags.length > 1 && index !== tags.length - 1 ? (
      <li className="tag-space">/</li>
    ) : (
      <></>
    )}
  </>
)

const Tags = ({ tags }) => (
  <ul className="tag-ul">
    {(tags || []).map((tag, index) => (
      <Tag key={tag} tag={tag} tags={tags} index={index} />
    ))}
  </ul>
)

export default Tags
